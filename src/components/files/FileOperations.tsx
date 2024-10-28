'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { 
  ShareIcon,
  LinkIcon,
  DocumentDuplicateIcon,
  ArrowRightIcon,
  TrashIcon,
  StarIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import { IFile, IFolder } from '@/types/file';
import RenameDialog from './RenameDialog';

interface FileOperationsProps {
  item: IFile | IFolder;
  onClose: () => void;
}

const FileOperations: FC<FileOperationsProps> = ({ item, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const isFolder = !('extension' in item);
  const [isRenaming, setIsRenaming] = useState(false);

  const operations = [
    {
      icon: ShareIcon,
      label: '分享',
      onClick: () => handleShare(),
    },
    {
      icon: LinkIcon,
      label: '复制链接',
      onClick: () => handleCopyLink(),
    },
    {
      icon: DocumentDuplicateIcon,
      label: '创建副本',
      onClick: () => handleCreateCopy(),
    },
    {
      icon: ArrowRightIcon,
      label: '移动到',
      onClick: () => handleMoveTo(),
    },
    {
      icon: StarIcon,
      label: '添加到"快速访问"',
      onClick: () => handleAddToQuickAccess(),
    },
    {
      icon: PencilIcon,
      label: '重命名',
      onClick: () => handleRename(),
    },
    {
      icon: TrashIcon,
      label: '删除',
      onClick: () => handleDelete(),
      className: 'text-red-600 hover:bg-red-50',
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleShare = () => {
    // TODO: 实现分享功能
    console.log('分享', item.name);
  };

  const handleCopyLink = () => {
    // TODO: 实现复制链接功能
    console.log('复制链接', item.name);
  };

  const handleCreateCopy = async () => {
    try {
      const response = await fetch(`/api/files/${item._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ operation: 'copy' }),
      });
      
      if (!response.ok) throw new Error('创建副本失败');
      onClose();
    } catch (error) {
      console.error('创建副本失败:', error);
    }
  };

  const handleMoveTo = () => {
    // TODO: 实现移动功能
    console.log('移动到', item.name);
  };

  const handleAddToQuickAccess = () => {
    // TODO: 实现添加到快速访问功能
    console.log('添加到快速访问', item.name);
  };

  const handleRename = async (newName: string) => {
    try {
      const response = await fetch(`/api/files/${item._id}/rename`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newName }),
      });

      if (!response.ok) {
        throw new Error('重命名失败');
      }

      setIsRenaming(false);
      onClose();
      // TODO: 刷新文件列表
    } catch (error) {
      console.error('重命名失败:', error);
    }
  };

  const handleDelete = async () => {
    if (!confirm(`确定要删除${isFolder ? '文件夹' : '文件'} "${item.name}" 吗？`)) return;
    
    try {
      const response = await fetch(`/api/files/${item._id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('删除失败');
      onClose();
    } catch (error) {
      console.error('删除失败:', error);
    }
  };

  return (
    <div
      ref={menuRef}
      className="absolute bg-white rounded-lg shadow-lg py-1 min-w-[200px] z-50 border border-[#E5E6E8]"
      style={{
        right: '16px',
        top: '0',
      }}
    >
      {operations.map((operation, index) => (
        <button
          key={index}
          onClick={() => {
            operation.onClick();
          }}
          className={`w-full px-4 py-2.5 text-[14px] text-left flex items-center hover:bg-[#F5F6F7] ${
            operation.className || 'text-[#1F2329]'
          }`}
        >
          <operation.icon className={`w-4 h-4 mr-3 ${
            operation.className?.includes('text-red-600') ? 'text-red-600' : 'text-[#86909C]'
          }`} />
          <span>{operation.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FileOperations;
