import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db/connect';
import { minioClient, BUCKET_NAME } from '@/lib/minio/client';
import File from '@/models/File';
import Folder from '@/models/Folder';

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

    // 验证目标文件夹
    if (targetFolderId) {
      const targetFolder = await Folder.findById(targetFolderId);
      if (!targetFolder) {
        return NextResponse.json({ message: '目标文件夹不存在' }, { status: 404 });
      }
    }

    // 查找并移动文件
    const file = await File.findById(params.id);
    if (file) {
      // 移动文件
      const oldPath = file.path;
      const newPath = `${session.user.id}/${targetFolderId || 'root'}/${file.name}`;

      // 在 MinIO 中复制文件
      await minioClient.copyObject(
        BUCKET_NAME,
        newPath,
        `${BUCKET_NAME}/${oldPath}`
      );

      // 删除原文件
      await minioClient.removeObject(BUCKET_NAME, oldPath);

      // 更新数据库记录
      file.path = newPath;
      file.folderId = targetFolderId || null;
      await file.save();

      return NextResponse.json({ message: '移动成功', file });
    }

    // 查找并移动文件夹
    const folder = await Folder.findById(params.id);
    if (folder) {
      folder.parentId = targetFolderId || null;
      await folder.save();

      return NextResponse.json({ message: '移动成功', folder });
    }

    return NextResponse.json({ message: '文件或文件夹不存在' }, { status: 404 });
  } catch (error) {
    console.error('移动失败:', error);
    return NextResponse.json(
      { message: '移动失败' },
      { status: 500 }
    );
  }
}
