'use client';

import { FC, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CreateFolderDialogProps {
  isOpen: boolean;
  currentFolder: { _id: string } | null;
  onClose: () => void;
  onCreated: (folder: any) => void;
}

const CreateFolderDialog: FC<CreateFolderDialogProps> = ({
  isOpen,
  currentFolder,
  onClose,
  onCreated,
}) => {
  const [folderName, setFolderName] = useState('');
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsCreating(true);

    try {
      const response = await fetch('/api/files/folders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: folderName,
          parentId: currentFolder?._id || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || '创建文件夹失败');
      }

      onCreated(data);
      setFolderName('');
      onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : '创建文件夹失败');
    } finally {
      setIsCreating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="px-6 py-4 border-b border-[#E5E6E8]">
          <h3 className="text-[16px] font-medium text-[#1F2329]">新建文件夹</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4">
            {error && (
              <div className="mb-4 text-[14px] text-red-500">{error}</div>
            )}
            
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="请输入文件夹名称"
              className="w-full px-3 py-2 text-[14px] border border-[#E5E6E8] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3370FF] focus:border-[#3370FF]"
              autoFocus
            />
          </div>

          <div className="flex justify-end space-x-2 px-6 py-4 bg-[#F5F6F7] rounded-b-lg">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-[14px] text-[#1F2329] hover:bg-[#E8E9EB] rounded"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={isCreating}
              className="px-4 py-2 text-[14px] text-white bg-[#3370FF] hover:bg-[#2860DF] rounded disabled:opacity-50"
            >
              {isCreating ? '创建中...' : '创建'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFolderDialog;
