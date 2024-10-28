import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/connect';
import User from '@/models/User';

export async function GET() {
  try {
    await connectDB();

    // 检查是否已存在管理员账户
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    
    if (existingAdmin) {
      return NextResponse.json(
        { message: '管理员账户已存在' },
        { status: 200 }
      );
    }

    // 创建新的管理员用户
    const adminUser = new User({
      username: 'admin',
      email: 'admin@example.com',
      password: 'Admin123456', // 包含大小写字母和数字的密码
      role: 'admin',
    });

    await adminUser.save();

    return NextResponse.json(
      { 
        message: '管理员账户创建成功',
        credentials: {
          email: 'admin@example.com',
          password: 'Admin123456'
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('创建管理员账户失败:', error);
    return NextResponse.json(
      { message: '创建管理员账户失败' },
      { status: 500 }
    );
  }
}
