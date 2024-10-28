import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db/connect';
import Folder from '@/models/Folder';
import File from '@/models/File';
import { minioClient, BUCKET_NAME } from '@/lib/minio/client';

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

    // 获取文件夹信息
    const folder = await Folder.findOne({
      _id: params.id,
      createdBy: session.user.id,
    });

    if (!folder) {
      return NextResponse.json(
        { message: '文件夹不存在或无权访问' },
        { status: 404 }
      );
    }

    // 递归获取所有子文件夹
    async function getAllSubFolders(folderId: string): Promise<string[]> {
      const subFolders = await Folder.find({ parentId: folderId });
      let allFolderIds = [folderId];
      
      for (const subFolder of subFolders) {
        const subFolderIds = await getAllSubFolders(subFolder._id.toString());
        allFolderIds = [...allFolderIds, ...subFolderIds];
      }
      
      return allFolderIds;
    }

    // 获取所有相关文件夹ID
    const allFolderIds = await getAllSubFolders(folder._id.toString());

    // 删除所有相关文件
    const files = await File.find({
      folderId: { $in: allFolderIds },
      createdBy: session.user.id,
    });

    // 从 MinIO 删除文件
    for (const file of files) {
      try {
        await minioClient.removeObject(BUCKET_NAME, file.path);
      } catch (error) {
        console.error('MinIO删除文件失败:', error);
      }
    }

    // 从数据库删除文件和文件夹
    await Promise.all([
      File.deleteMany({ folderId: { $in: allFolderIds }, createdBy: session.user.id }),
      Folder.deleteMany({ _id: { $in: allFolderIds }, createdBy: session.user.id }),
    ]);

    return NextResponse.json({ message: '文件夹删除成功' });
  } catch (error) {
    console.error('删除文件夹错误:', error);
    return NextResponse.json(
      { message: '删除文件夹失败' },
      { status: 500 }
    );
  }
}
