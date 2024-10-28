'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { 
  HomeIcon,
  FolderIcon, 
  ShareIcon, 
  TrashIcon,
  ArrowLeftOnRectangleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface QuickAccessItem {
  _id: string;
  fileId?: { _id: string; name: string };
  folderId?: { _id: string; name: string };
}

const Sidebar: FC = () => {
  const [quickAccessItems, setQuickAccessItems] = useState<QuickAccessItem[]>([]);

  useEffect(() => {
    loadQuickAccess();
  }, []);

  const loadQuickAccess = async () => {
    try {
      const response = await fetch('/api/files/quick-access');
      if (response.ok) {
        const data = await response.json();
        setQuickAccessItems(data);
      }
    } catch (error) {
      console.error('加载快速访问失败:', error);
    }
  };

  const menuItems = [
    { name: '主页', icon: HomeIcon, href: '/dashboard' },
    { name: '文件管理', icon: FolderIcon, href: '/files', active: true },
    { name: '共享文件', icon: ShareIcon, href: '/shared' },
    { name: '回收站', icon: TrashIcon, href: '/trash' },
  ];

  return (
    <div className="w-[200px] bg-[#f7f8fa] h-screen flex flex-col">
      {/* Logo 和标题 */}
      <div className="p-4 flex items-center">
        <div className="relative w-[42px] h-[42px]">
          <img 
            src="/img/logo.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-lg font-medium text-[#1F2329] ml-3">文件协同系统</h1>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-2.5 text-sm ${
              item.active 
                ? 'text-[#3370FF] bg-[#F0F7FF] font-medium' 
                : 'text-[#1F2329] hover:bg-[#F5F6F7]'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* 快速访问区域 */}
      {quickAccessItems.length > 0 && (
        <div className="px-4 py-2">
          <h3 className="text-xs font-medium text-[#646A73] mb-2">快速访问</h3>
          <div className="space-y-1">
            {quickAccessItems.map((item) => (
              <Link
                key={item._id}
                href={`/files${item.folderId ? `?folder=${item.folderId._id}` : ''}`}
                className="flex items-center px-4 py-2 text-sm text-[#1F2329] hover:bg-[#F5F6F7] rounded-lg"
              >
                <StarIcon className="w-4 h-4 mr-2 text-[#FFB626]" />
                <span className="truncate">
                  {item.fileId?.name || item.folderId?.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 mt-auto">
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
          <span>退出登录</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
