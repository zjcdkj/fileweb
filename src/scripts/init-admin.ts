import { connectDB } from '../lib/db/connect';
import User from '../models/User';

async function createAdminUser() {
  try {
    await connectDB();

    // 检查是否已存在管理员账户
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    
    if (existingAdmin) {
      console.log('管理员账户已存在');
      return;
    }

    // 创建新的管理员用户
    const adminUser = new User({
      username: 'admin',
      email: 'admin@example.com',
      password: 'Admin123456', // 包含大小写字母和数字的密码
      role: 'admin',
    });

    await adminUser.save();
    console.log('管理员账户创建成功');
    console.log('邮箱: admin@example.com');
    console.log('密码: Admin123456');
  } catch (error) {
    console.error('创建管理员账户失败:', error);
  } finally {
    process.exit();
  }
}

createAdminUser();
