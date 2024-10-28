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

    // 如果在子文件夹中，获取当前文件夹信息
    let currentFolder = null;
    if (folderId) {
      currentFolder = await Folder.findOne({
        _id: folderId,
        createdBy: session.user.id,
      });

      if (!currentFolder) {
        return NextResponse.json({ message: '文件夹不存在' }, { status: 404 });
      }
    }

    return NextResponse.json({
      files,
      folders,
      currentFolder,
    });

  } catch (error) {
    console.error('获取文件列表错误:', error);
    return NextResponse.json(
      { message: '获取文件列表失败' },
      { status: 500 }
    );
  }
}
