'use client';

import { FC, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { IFile, IFolder } from '@/types/file';

interface RenameDialogProps {
  isOpen: boolean;
  item: IFile | IFolder;
  onClose: () => void;
  onRename: (newName: string) => void;
}

const RenameDialog: FC<RenameDialogProps> = ({
  isOpen,
  item,
  onClose,
  onRename,
}) => {
  const [newName, setNewName] = useState(item.name);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!newName.trim()) {
      setError('名称不能为空');
      return;
    }

    if (newName === item.name) {
      onClose();
      return;
    }

    onRename(newName);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">重命名</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 text-sm text-red-500">{error}</div>
          )}
          
          <div className="mb-4">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              取消
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              确定
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RenameDialog;
