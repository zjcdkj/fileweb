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
      if (targetFolder.createdBy.toString() !== session.user.id) {
        return NextResponse.json({ message: '无权访问目标文件夹' }, { status: 403 });
      }
    }

    // 先尝试查找文件
    let item = await File.findById(params.id);
    let isFile = true;

    // 如果不是文件，尝试查找文件夹
    if (!item) {
      item = await Folder.findById(params.id);
      isFile = false;
    }

    if (!item) {
      return NextResponse.json({ message: '项目不存在' }, { status: 404 });
    }

    // 验证权限
    if (item.createdBy.toString() !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json({ message: '无权操作此项目' }, { status: 403 });
    }

    if (isFile) {
      const file = item as any;
      // 生成新路径
      const newPath = `${session.user.id}/${targetFolderId || 'root'}/${file.name}`;

      // 只有当新路径和旧路径不同时才移动文件
      if (newPath !== file.path) {
        // 在 MinIO 中移动文件
        await minioClient.copyObject(
          BUCKET_NAME,
          newPath,
          `${BUCKET_NAME}/${file.path}`
        );
        await minioClient.removeObject(BUCKET_NAME, file.path);

        // 更新文件记录
        file.path = newPath;
        file.folderId = targetFolderId || null;
        await file.save();
      }
    } else {
      const folder = item as any;
      // 检查是否试图将文件夹移动到其子文件夹中
      let parent = await Folder.findById(targetFolderId);
      while (parent) {
        if (parent._id.toString() === folder._id.toString()) {
          return NextResponse.json(
            { message: '不能将文件夹移动到其子文件夹中' },
            { status: 400 }
          );
        }
        parent = await Folder.findById(parent.parentId);
      }

      // 更新文件夹记录
      folder.parentId = targetFolderId || null;
      await folder.save();
    }

    return NextResponse.json({ message: '移动成功', item });
  } catch (error) {
    console.error('移动失败:', error);
    return NextResponse.json(
      { message: '移动失败' },
      { status: 500 }
    );
  }
}
