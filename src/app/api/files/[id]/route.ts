import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db/connect';
import { minioClient, BUCKET_NAME } from '@/lib/minio/client';
import File from '@/models/File';
import Folder from '@/models/Folder';

// 删除文件或文件夹
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    await connectDB();

    // 先尝试查找文件
    const file = await File.findById(params.id);
    if (!file) {
      return NextResponse.json({ message: '文件不存在' }, { status: 404 });
    }

    // 验证权限
    if (file.createdBy.toString() !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json({ message: '无权删除此文件' }, { status: 403 });
    }

    // 从 MinIO 中删除文件
    await minioClient.removeObject(BUCKET_NAME, file.path);

    // 从数据库中删除文件记录
    await file.deleteOne();

    return NextResponse.json({ message: '删除成功' });
  } catch (error) {
    console.error('删除文件错误:', error);
    return NextResponse.json(
      { message: '删除失败' },
      { status: 500 }
    );
  }
}

// 复制文件
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    const { operation, targetFolderId } = await request.json();

    await connectDB();

    const file = await File.findById(params.id);
    if (!file) {
      return NextResponse.json({ message: '文件不存在' }, { status: 404 });
    }

    if (file.createdBy.toString() !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json({ message: '无权操作此文件' }, { status: 403 });
    }

    if (operation === 'copy') {
      // 复制文件到新位置
      const newPath = `${session.user.id}/${targetFolderId || 'root'}/${file.name}`;
      
      // 在 MinIO 中复制文件
      await minioClient.copyObject(
        BUCKET_NAME,
        newPath,
        `${BUCKET_NAME}/${file.path}`
      );

      // 创建新的文件记录
      const newFile = new File({
        name: `${file.name} - 副本`,
        originalName: file.originalName,
        size: file.size,
        type: file.type,
        extension: file.extension,
        folderId: targetFolderId || null,
        path: newPath,
        createdBy: session.user.id,
      });

      await newFile.save();

      return NextResponse.json({
        message: '复制成功',
        file: newFile,
      });
    }

    return NextResponse.json({ message: '不支持的操作' }, { status: 400 });
  } catch (error) {
    console.error('操作失败:', error);
    return NextResponse.json(
      { message: '操作失败' },
      { status: 500 }
    );
  }
}
