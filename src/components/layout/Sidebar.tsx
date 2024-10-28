'use client';

import { FC } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { 
  HomeIcon,
  FolderIcon, 
  ShareIcon, 
  TrashIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

const Sidebar: FC = () => {
  const menuItems = [
    { name: '主页', icon: HomeIcon, href: '/dashboard' },
    { name: '文件管理', icon: FolderIcon, href: '/files', active: true },
    { name: '共享文件', icon: ShareIcon, href: '/shared' },
    { name: '回收站', icon: TrashIcon, href: '/trash' },
  ];

  return (
    <div className="w-[200px] bg-[#f7f8fa] h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-lg font-medium">文件管理系统</h1>
      </div>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-2.5 text-sm ${
              item.active 
                ? 'text-blue-600 bg-blue-50 font-medium' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
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
