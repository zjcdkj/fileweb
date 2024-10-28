import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db/connect';
import QuickAccess from '@/models/QuickAccess';
import File from '@/models/File';
import Folder from '@/models/Folder';

// 获取快速访问列表
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    await connectDB();

    const quickAccess = await QuickAccess.find({ userId: session.user.id })
      .populate('fileId')
      .populate('folderId')
      .sort({ createdAt: -1 });

    return NextResponse.json(quickAccess);
  } catch (error) {
    console.error('获取快速访问列表失败:', error);
    return NextResponse.json(
      { message: '获取快速访问列表失败' },
      { status: 500 }
    );
  }
}

// 添加到快速访问
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    const { fileId, folderId } = await request.json();
    if (!fileId && !folderId) {
      return NextResponse.json(
        { message: '请提供文件或文件夹ID' },
        { status: 400 }
      );
    }

    await connectDB();

    // 验证文件/文件夹是否存在
    if (fileId) {
      const file = await File.findById(fileId);
      if (!file) {
        return NextResponse.json({ message: '文件不存在' }, { status: 404 });
      }
    }

    if (folderId) {
      const folder = await Folder.findById(folderId);
      if (!folder) {
        return NextResponse.json({ message: '文件夹不存在' }, { status: 404 });
      }
    }

    // 创建快速访问记录
    const quickAccess = new QuickAccess({
      userId: session.user.id,
      fileId,
      folderId,
    });

    await quickAccess.save();

    return NextResponse.json({
      message: '添加到快速访问成功',
      quickAccess,
    });
  } catch (error) {
    console.error('添加到快速访问失败:', error);
    return NextResponse.json(
      { message: '添加到快速访问失败' },
      { status: 500 }
    );
  }
}
