'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // 验证新密码和确认密码是否匹配
    if (newPassword !== confirmPassword) {
      setError('新密码和确认密码不匹配');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || '修改密码失败');
      }

      // 密码修改成功，跳转到个人中心
      router.push('/profile');
      router.refresh();
    } catch (error: any) {
      setError(error.message || '修改密码失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* 左侧部分 */}
      <div className="flex-1 relative">
        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center space-x-2">
              <div className="relative w-[42px] h-[42px]">
                <Image 
                  src="/images/logo.png"
                  alt="Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-xl font-medium text-[#1F2329]">文件协同系统</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧部分 */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[400px]">
          <h2 className="text-2xl font-medium mb-8">修改密码</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <div>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="当前密码"
                className="w-full px-4 py-3 border border-[#E5E6E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3370FF] focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="新密码"
                className="w-full px-4 py-3 border border-[#E5E6E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3370FF] focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="确认新密码"
                className="w-full px-4 py-3 border border-[#E5E6E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3370FF] focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#3370FF] text-white py-3 rounded-lg hover:bg-[#2860DF] transition-colors disabled:opacity-50"
            >
              {isLoading ? '提交中...' : '确认修改'}
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="w-full border border-[#E5E6E8] text-[#1F2329] py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              返回
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
