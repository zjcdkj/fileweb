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
  ArrowDownTrayIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { IFile, IFolder } from '@/types/file';
import RenameDialog from './RenameDialog';
import FolderSelectDialog from './FolderSelectDialog';

interface FileOperationsProps {
  item: IFile | IFolder;
  position: { x: number; y: number };
  onClose: () => void;
  onRefresh?: () => void;
}

interface Toast {
  type: 'success' | 'error';
  message: string;
}

const FileOperations: FC<FileOperationsProps> = ({ item, position, onClose, onRefresh }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const isFolder = !('extension' in item);
  const [isRenaming, setIsRenaming] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState<() => void>(() => {});
  const [confirmMessage, setConfirmMessage] = useState('');
  const [showFolderSelect, setShowFolderSelect] = useState(false);
  const [menuPosition, setMenuPosition] = useState(position);
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // 计算新的位置
      let newX = position.x;
      let newY = position.y;

      // 检查右边界
      if (position.x + rect.width > viewportWidth) {
        newX = position.x - rect.width; // 将菜单向左移动
      }

      // 检查底部边界
      if (position.y + rect.height > viewportHeight) {
        newY = position.y - rect.height; // 将菜单向上移动
      }

      // 确保不会超出左边界和上边界
      newX = Math.max(0, newX);
      newY = Math.max(0, newY);

      setMenuPosition({ x: newX, y: newY });
    }
  }, [position]);

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
      
      // 强制刷新文件列表
      if (onRefresh) {
        await onRefresh();
      }
    } catch (error) {
      console.error('创建副本失败:', error);
    }
  };

  const handleMoveTo = () => {
    setShowFolderSelect(true);
  };

  const handleMove = async (targetFolderId: string | null) => {
    try {
      const response = await fetch(`/api/files/${item._id}/move`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetFolderId }),
      });

      if (!response.ok) throw new Error('移动失败');

      showToast('success', '移动成功');
      setShowFolderSelect(false);
      onClose();
      
      if (onRefresh) {
        await onRefresh();
      }
    } catch (error) {
      console.error('移动失败:', error);
      showToast('error', '移动失败');
    }
  };

  const handleAddToQuickAccess = async () => {
    try {
      const response = await fetch('/api/files/quick-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileId: 'extension' in item ? item._id : undefined,
          folderId: !('extension' in item) ? item._id : undefined,
        }),
      });

      if (!response.ok) throw new Error('添加到快速访问失败');

      showToast('success', '已添加到快速访问');
      onClose();
      
      if (onRefresh) {
        await onRefresh();
      }
    } catch (error) {
      console.error('添加到快速访问失败:', error);
      showToast('error', '添加到快速访问失败');
    }
  };

  const handleRename = () => {
    setIsRenaming(true);
  };

  const handleDelete = () => {
    showConfirm(
      `确定要删除${isFolder ? '文件夹' : '文件'} "${item.name}" 吗？${
        isFolder ? '文件夹内的所有内容都将被删除。' : ''
      }`,
      async () => {
        try {
          // 根据类型选择不同的删除 API 端点
          const endpoint = isFolder 
            ? `/api/files/folders/${item._id}`
            : `/api/files/${item._id}`;

          const response = await fetch(endpoint, {
            method: 'DELETE',
          });
          
          if (!response.ok) {
            throw new Error('删除失败');
          }

          showToast('success', '删除成功');
          setIsConfirmOpen(false);
          onClose();
          
          if (onRefresh) {
            await onRefresh();
          }
        } catch (error) {
          console.error('删除失败:', error);
          showToast('error', '删除失败');
        }
      }
    );
  };

  const handleDownload = async () => {
    try {
      // 只有文件可以下载
      if ('extension' in item) {
        const response = await fetch(`/api/files/download/${item._id}`);
        if (!response.ok) throw new Error('下载失败');

        // 获取文件名
        const contentDisposition = response.headers.get('content-disposition');
        const fileName = contentDisposition
          ? decodeURIComponent(contentDisposition.split('filename*=UTF-8\'\'')[1])
          : item.name;

        // 创建下载链接
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('下载失败:', error);
    }
  };

  const operations = [
    {
      icon: ShareIcon,
      label: '分享',
      onClick: handleShare,
    },
    {
      icon: LinkIcon,
      label: '复制链接',
      onClick: handleCopyLink,
    },
    {
      icon: DocumentDuplicateIcon,
      label: '创建副本',
      onClick: handleCreateCopy,
    },
    {
      icon: ArrowRightIcon,
      label: '移动到',
      onClick: () => setShowFolderSelect(true),
    },
    {
      icon: StarIcon,
      label: '添加到快速访问',
      onClick: handleAddToQuickAccess,
    },
    {
      icon: PencilIcon,
      label: '重命名',
      onClick: () => setIsRenaming(true),
    },
    {
      icon: TrashIcon,
      label: '删除',
      onClick: handleDelete,
      className: 'text-red-600 hover:bg-red-50',
    },
    {
      icon: ArrowDownTrayIcon,
      label: '下载',
      onClick: handleDownload,
      show: 'extension' in item, // 只对文件显示下载选项
    },
  ].filter(op => op.show !== false);

  const showConfirm = (message: string, action: () => void) => {
    setConfirmMessage(message);
    setConfirmAction(() => action);
    setIsConfirmOpen(true);
  };

  // 显示提示信息
  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      <div
        ref={menuRef}
        className="fixed bg-white rounded-lg shadow-lg py-1 min-w-[200px] z-50"
        style={{
          left: `${menuPosition.x}px`,
          top: `${menuPosition.y}px`,
        }}
        onClick={(e) => e.stopPropagation()}
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

      {/* 确认对话框 */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="px-6 py-4 border-b border-[#E5E6E8]">
              <h3 className="text-[16px] font-medium text-[#1F2329]">确认删除</h3>
            </div>
            <div className="px-6 py-4">
              <p className="text-[14px] text-[#1F2329]">{confirmMessage}</p>
            </div>
            <div className="flex justify-end space-x-2 px-6 py-4 bg-[#F5F6F7]">
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="px-4 py-2 text-[14px] text-[#1F2329] hover:bg-[#E8E9EB] rounded"
              >
                取消
              </button>
              <button
                onClick={() => {
                  confirmAction();
                  setIsConfirmOpen(false);
                }}
                className="px-4 py-2 text-[14px] text-white bg-[#3370FF] hover:bg-[#2860DF] rounded"
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 重命名对话框 */}
      {isRenaming && (
        <RenameDialog
          isOpen={isRenaming}
          item={item}
          onClose={() => setIsRenaming(false)}
          onRename={handleRename}
        />
      )}

      {/* 文件夹选择对话框 */}
      {showFolderSelect && (
        <FolderSelectDialog
          isOpen={showFolderSelect}
          currentFolder={null}
          onClose={() => setShowFolderSelect(false)}
          onSelect={handleMove}
        />
      )}

      {/* 提示消息 */}
      {toast && (
        <div className="fixed top-4 right-4 flex items-center bg-white rounded-lg shadow-lg px-4 py-2 z-50">
          {toast.type === 'success' ? (
            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
          ) : (
            <XCircleIcon className="w-5 h-5 text-red-500 mr-2" />
          )}
          <span className={`text-sm ${
            toast.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {toast.message}
          </span>
        </div>
      )}
    </>
  );
};

export default FileOperations;
