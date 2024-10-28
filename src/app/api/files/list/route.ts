import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db/connect';
import File from '@/models/File';
import Folder from '@/models/Folder';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const folderId = searchParams.get('folderId') || null;

    await connectDB();

    // 获取所有文件夹以构建路径
    const allFolders = await Folder.find({
      createdBy: session.user.id,
    });

    // 获取当前文件夹的文件和子文件夹
    const [files, folders] = await Promise.all([
      File.find({
        createdBy: session.user.id,
        folderId: folderId,
      }).sort({ createdAt: -1 }),
      
      Folder.find({
        createdBy: session.user.id,
        parentId: folderId,
      }).sort({ createdAt: -1 }),
    ]);

    // 如果在子文件夹中，获取完整的文件夹路径
    let folderPath = [];
    if (folderId) {
      let currentFolder = allFolders.find(f => f._id.toString() === folderId);
      while (currentFolder) {
        folderPath.unshift(currentFolder);
        currentFolder = allFolders.find(
          f => f._id.toString() === currentFolder?.parentId?.toString()
        );
      }
    }

    return NextResponse.json({
      files,
      folders,
      currentFolder: folderId ? allFolders.find(f => f._id.toString() === folderId) : null,
      folderPath,
      allFolders, // 返回所有文件夹以供前端构建路径
    });

  } catch (error) {
    console.error('获取文件列表错误:', error);
    return NextResponse.json(
      { message: '获取文件列表失败' },
      { status: 500 }
    );
  }
}
