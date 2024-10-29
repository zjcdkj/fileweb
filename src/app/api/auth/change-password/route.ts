import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { hash, compare } from 'bcryptjs';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    // 获取当前会话，验证用户是否登录
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { message: '未授权访问' },
        { status: 401 }
      );
    }

    const { oldPassword, newPassword } = await request.json();

    // 基本验证
    if (!oldPassword || !newPassword) {
      return NextResponse.json(
        { message: '请提供所有必需的字段' },
        { status: 400 }
      );
    }

    // 获取当前用户
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { message: '用户不存在' },
        { status: 404 }
      );
    }

    // 验证旧密码
    const isValidPassword = await compare(oldPassword, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: '当前密码错误' },
        { status: 400 }
      );
    }

    // 验证新密码格式（可选：根据你的密码策略调整）
    if (newPassword.length < 6) {
      return NextResponse.json(
        { message: '新密码长度不能少于6个字符' },
        { status: 400 }
      );
    }

    // 加密新密码
    const hashedPassword = await hash(newPassword, 12);

    // 更新密码
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    return NextResponse.json(
      { message: '密码修改成功' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Change password error:', error);
    return NextResponse.json(
      { message: '服务器错误，请稍后重试' },
      { status: 500 }
    );
  }
} 