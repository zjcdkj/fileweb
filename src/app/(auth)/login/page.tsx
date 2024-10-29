'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


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
      <div className="flex-1 relative bg-white">
        {/* 背景图片容器 */}
        <div className="absolute inset-0">
          <Image 
            src="https://5b0988e595225.cdn.sohucs.com/a_auto,c_cut,x_0,y_853,w_2500,h_1666/images/20181123/89487e2a54d5460ebb6c89fb77fb25ed.jpeg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 内容层 */}
        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center space-x-2">
              <div className="relative w-[42px] h-[42px]">
                <Image 
                  // src="/images/logo.png"
                  src="http://gidata.gzgoodidea.com:9101/portal/%E6%95%B0%E6%99%BA%E5%B7%A5%E5%8E%82-%E6%95%B0%E6%8D%AE%E6%B2%BB%E7%90%86%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0.png"
                  alt="Logo" 
                  width={42}
                  height={42}
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-2xl font-medium text-white">文件协同系统</h1>
            </div>
            <div className="mt-32">
              <h2 className="text-4xl font-bold text-white mb-4">全新体验</h2>
              <p className="text-lg text-white/80">更快速、更高效、更专业、更用心。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧部分 */}
      <div className="flex-1 flex items-center justify-center bg-white">
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
              {/* <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#646A73]">其他登录方式</span>
              </div> */}
            </div>

            {/* 社交图标部分 */}
            {/* <div className="flex justify-center space-x-6">
              <button type="button" className="p-2 rounded-full hover:bg-[#F5F6F7]">
                <Image 
                  src="/images/wechat.png"
                  alt="WeChat" 
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
              <button type="button" className="p-2 rounded-full hover:bg-[#F5F6F7]">
                <Image 
                  src="/images/alipay.png"
                  alt="Alipay" 
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}
