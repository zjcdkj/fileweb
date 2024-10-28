import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db/connect';
import { minioClient, BUCKET_NAME } from '@/lib/minio/client';
import File from '@/models/File';
import Folder from '@/models/Folder';
import path from 'path';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    const { newName } = await request.json();
    if (!newName?.trim()) {
      return NextResponse.json({ message: '名称不能为空' }, { status: 400 });
    }

    await connectDB();

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
      // 处理文件重命名
      const file = item as typeof File.prototype;
      const oldPath = file.path;
      const extension = path.extname(file.originalName);
      const newPath = oldPath.replace(path.basename(oldPath), `${newName}${extension}`);

      // 在 MinIO 中复制文件到新路径
      await minioClient.copyObject(
        BUCKET_NAME,
        newPath,
        `${BUCKET_NAME}/${oldPath}`
      );

      // 删除旧文件
      await minioClient.removeObject(BUCKET_NAME, oldPath);

      // 更新数据库记录
      file.name = newName;
      file.path = newPath;
      await file.save();
    } else {
      // 处理文件夹重命名
      const folder = item as typeof Folder.prototype;
      folder.name = newName;
      await folder.save();

      // TODO: 可能还需要更新所有子文件和文件夹的路径
    }

    return NextResponse.json({ message: '重命名成功', item });
  } catch (error) {
    console.error('重命名错误:', error);
    return NextResponse.json(
      { message: '重命名失败' },
      { status: 500 }
    );
  }
}
