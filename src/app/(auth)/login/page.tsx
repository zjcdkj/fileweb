'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push('/files');
      }
    } catch (error) {
      setError('登录失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* 左侧部分 */}
      <div className="flex-1 bg-[#F7F8FA] p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <div className="relative w-[42px] h-[42px]">
              {/* 使用普通 img 标签 */}
              <img 
                src="/images/logo.png"
                // src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`} 
                alt="Logo" 
                width={42}
                height={42}
                className="object-contain"
              />
            </div>
            <h1 className="text-xl font-medium text-[#1F2329]">文件协同系统</h1>
          </div>
          <div className="mt-32">
            <h2 className="text-2xl font-medium mb-4">全新体验</h2>
            <p className="text-[#646A73]">更快速、更高效、更专业、更用心。</p>
          </div>
        </div>
        <div className="relative w-full h-[300px]">
          <img 
            src="/images/login-illustration.png"
            alt="Login illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* 右侧部分 */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[400px]">
          <h2 className="text-2xl font-medium mb-8">欢迎登录</h2>
          <p className="text-[#646A73] mb-8">新用户？<Link href="/register" className="text-[#3370FF]">点击注册</Link></p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="账号/手机号"
                className="w-full px-4 py-3 border border-[#E5E6E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3370FF] focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="密码"
                className="w-full px-4 py-3 border border-[#E5E6E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3370FF] focus:border-transparent"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-[#646A73]">记住密码</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#3370FF]">
                忘记密码？
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#3370FF] text-white py-3 rounded-lg hover:bg-[#2860DF] transition-colors disabled:opacity-50"
            >
              {isLoading ? '登录中...' : '登录'}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E5E6E8]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#646A73]">其他登录方式</span>
              </div>
            </div>

            {/* 社交图标部分 */}
            <div className="flex justify-center space-x-6">
              <button type="button" className="p-2 rounded-full hover:bg-[#F5F6F7]">
                <img 
                  src="/images/wechat.png"
                  alt="WeChat" 
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
              <button type="button" className="p-2 rounded-full hover:bg-[#F5F6F7]">
                <img 
                  src="/images/alipay.png"
                  alt="Alipay" 
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
