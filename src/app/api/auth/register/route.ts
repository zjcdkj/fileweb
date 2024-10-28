import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/connect';
import User from '@/models/User';
import { validatePassword } from '@/middleware/validatePassword';

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    // 验证输入
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: '请填写所有必填字段' },
        { status: 400 }
      );
    }

    // 验证密码强度
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { message: passwordValidation.message },
        { status: 400 }
      );
    }

    // 连接数据库
    await connectDB();

    // 检查用户名是否已存在
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return NextResponse.json(
        { message: '用户名已被使用' },
        { status: 400 }
      );
    }

    // 检查邮箱是否已存在
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { message: '邮箱已被注册' },
        { status: 400 }
      );
    }

    // 创建新用户
    const user = new User({
      username,
      email,
      password,
      role: 'user',
    });

    await user.save();

    // 返回成功响应
    return NextResponse.json(
      { message: '注册成功' },
      { status: 201 }
    );
  } catch (error) {
    console.error('注册错误:', error);
    return NextResponse.json(
      { message: '注册过程中发生错误' },
      { status: 500 }
    );
  }
}
