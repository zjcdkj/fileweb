import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db/connect';
import { minioClient, BUCKET_NAME } from '@/lib/minio/client';
import File from '@/models/File';

// 删除文件
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

    const file = await File.findById(params.id);
    if (!file) {
      return NextResponse.json({ message: '文件不存在' }, { status: 404 });
    }

    // 验证权限
    if (file.createdBy.toString() !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json({ message: '无权操作此文件' }, { status: 403 });
    }

    // 从 MinIO 删除文件
    await minioClient.removeObject(BUCKET_NAME, file.path);

    // 从数据库删除文件记录
    await file.deleteOne();

    return NextResponse.json({ message: '文件删除成功' });
  } catch (error) {
    console.error('删除文件错误:', error);
    return NextResponse.json(
      { message: '删除文件失败' },
      { status: 500 }
    );
  }
}

// 移动文件
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    const { targetFolderId } = await request.json();

    await connectDB();

    const file = await File.findById(params.id);
    if (!file) {
      return NextResponse.json({ message: '文件不存在' }, { status: 404 });
    }

    // 验证权限
    if (file.createdBy.toString() !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json({ message: '无权操作此文件' }, { status: 403 });
    }

    // 更新文件路径
    const newPath = `${session.user.id}/${targetFolderId || 'root'}/${file.name}`;

    // 在 MinIO 中复制文件到新位置
    await minioClient.copyObject(
      BUCKET_NAME,
      newPath,
      `${BUCKET_NAME}/${file.path}`
    );

    // 删除原文件
    await minioClient.removeObject(BUCKET_NAME, file.path);

    // 更新数据库记录
    file.path = newPath;
    file.folderId = targetFolderId || null;
    await file.save();

    return NextResponse.json({ message: '文件移动成功', file });
  } catch (error) {
    console.error('移动文件错误:', error);
    return NextResponse.json(
      { message: '移动文件失败' },
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

    const { targetFolderId } = await request.json();

    await connectDB();

    const file = await File.findById(params.id);
    if (!file) {
      return NextResponse.json({ message: '文件不存在' }, { status: 404 });
    }

    // 验证权限
    if (file.createdBy.toString() !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json({ message: '无权操作此文件' }, { status: 403 });
    }

    // 创建新的文件路径
    const newPath = `${session.user.id}/${targetFolderId || 'root'}/${file.name}`;

    // 在 MinIO 中复制文件
    await minioClient.copyObject(
      BUCKET_NAME,
      newPath,
      `${BUCKET_NAME}/${file.path}`
    );

    // 创建新的文件记录
    const newFile = new File({
      name: file.name,
      originalName: file.originalName,
      size: file.size,
      type: file.type,
      extension: file.extension,
      folderId: targetFolderId || null,
      path: newPath,
      createdBy: session.user.id,
    });

    await newFile.save();

    return NextResponse.json({ message: '文件复制成功', file: newFile });
  } catch (error) {
    console.error('复制文件错误:', error);
    return NextResponse.json(
      { message: '复制文件失败' },
      { status: 500 }
    );
  }
}
