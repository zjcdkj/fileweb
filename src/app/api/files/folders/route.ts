import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db/connect';
import Folder from '@/models/Folder';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    const { name, parentId } = await request.json();

    if (!name?.trim()) {
      return NextResponse.json(
        { message: '文件夹名称不能为空' },
        { status: 400 }
      );
    }

    await connectDB();

    // 检查同一目录下是否存在同名文件夹
    const existingFolder = await Folder.findOne({
      name,
      parentId: parentId || null,
      createdBy: session.user.id,
    });

    if (existingFolder) {
      return NextResponse.json(
        { message: '该目录下已存在同名文件夹' },
        { status: 400 }
      );
    }

    // 创建文件夹路径
    let path = name;
    if (parentId) {
      const parentFolder = await Folder.findById(parentId);
      if (!parentFolder) {
        return NextResponse.json(
          { message: '父文件夹不存在' },
          { status: 404 }
        );
      }
      path = `${parentFolder.path}/${name}`;
    }

    // 创建新文件夹
    const folder = new Folder({
      name,
      parentId: parentId || null,
      path,
      createdBy: session.user.id,
    });

    await folder.save();

    return NextResponse.json(folder, { status: 201 });
  } catch (error) {
    console.error('创建文件夹错误:', error);
    return NextResponse.json(
      { message: '创建文件夹失败' },
      { status: 500 }
    );
  }
}
