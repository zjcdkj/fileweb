import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db/connect';
import Share from '@/models/Share';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    const { fileId, password, expiresIn } = await request.json();

    await connectDB();

    // 生成分享码
    const code = nanoid(10);

    // 计算过期时间
    const expiresAt = expiresIn === 'forever' ? null : new Date(Date.now() + expiresIn);

    // 创建分享记录
    const share = new Share({
      fileId,
      createdBy: session.user.id,
      code,
      password,
      expiresAt,
    });

    await share.save();

    return NextResponse.json({
      message: '分享创建成功',
      code: share.code,
    });
  } catch (error) {
    console.error('创建分享错误:', error);
    return NextResponse.json(
      { message: '创建分享失败' },
      { status: 500 }
    );
  }
}
