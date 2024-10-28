'use client';

import { FC, useState, useEffect } from 'react';
import { XMarkIcon, FolderIcon } from '@heroicons/react/24/outline';
import { IFolder } from '@/types/file';

interface FolderSelectDialogProps {
  isOpen: boolean;
  currentFolder: IFolder | null;
  onClose: () => void;
  onSelect: (folderId: string | null) => void;
}

const FolderSelectDialog: FC<FolderSelectDialogProps> = ({
  isOpen,
  currentFolder,
  onClose,
  onSelect,
}) => {
  const [folders, setFolders] = useState<IFolder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      loadFolders();
    }
  }, [isOpen]);

  const loadFolders = async () => {
    try {
      const response = await fetch('/api/files/list');
      if (response.ok) {
        const data = await response.json();
        setFolders(data.folders);
      }
    } catch (error) {
      console.error('加载文件夹失败:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">选择目标文件夹</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {loading ? (
          <div className="text-center py-4">加载中...</div>
        ) : (
          <div className="space-y-2 max-h-96 overflow-auto">
            <div
              className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
              onClick={() => onSelect(null)}
            >
              <FolderIcon className="w-5 h-5 text-yellow-500 mr-2" />
              <span>根目录</span>
            </div>
            {folders.map((folder) => (
              <div
                key={folder._id}
                className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => onSelect(folder._id)}
              >
                <FolderIcon className="w-5 h-5 text-yellow-500 mr-2" />
                <span>{folder.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FolderSelectDialog;
