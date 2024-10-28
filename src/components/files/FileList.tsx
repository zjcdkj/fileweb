'use client';

import { FC, useState } from 'react';
import { 
  FolderIcon, 
  DocumentIcon,
  EllipsisVerticalIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { IFile, IFolder } from '@/types/file';
import FileOperations from './FileOperations';
import { formatFileSize, getFileIcon } from '@/lib/utils/file.tsx';
import { ViewMode } from './ViewToggle';
import { DragEvent } from 'react';

interface FileListProps {
  files: IFile[];
  folders: IFolder[];
  selectedItems: (IFile | IFolder)[];
  viewMode: ViewMode;
  onSelect: (items: (IFile | IFolder)[]) => void;
  onFolderOpen: (folder: IFolder) => void;
  onRefresh?: () => void;
}

const FileList: FC<FileListProps> = ({
  files,
  folders,
  selectedItems,
  viewMode,
  onSelect,
  onFolderOpen,
  onRefresh,
}) => {
  const [operationsTarget, setOperationsTarget] = useState<{ item: IFile | IFolder; position: { x: number; y: number } } | null>(null);
  const [draggedItem, setDraggedItem] = useState<IFile | IFolder | null>(null);
  const [dragOverFolder, setDragOverFolder] = useState<string | null>(null);
  const [dragCounter, setDragCounter] = useState(0);

  const handleItemClick = (item: IFile | IFolder, event: React.MouseEvent) => {
    if (event.ctrlKey || event.metaKey) {
      // 多选
      const isSelected = selectedItems.some(selected => selected._id === item._id);
      if (isSelected) {
        onSelect(selectedItems.filter(selected => selected._id !== item._id));
      } else {
        onSelect([...selectedItems, item]);
      }
    } else {
      // 单选
      onSelect([item]);
    }
  };

  const handleFolderDoubleClick = (folder: IFolder) => {
    onFolderOpen(folder);
  };

  const handleOperationsClick = (event: React.MouseEvent, item: IFile | IFolder) => {
    event.stopPropagation();
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setOperationsTarget({
      item,
      position: { x: rect.left, y: rect.bottom },
    });
  };

  const handleDragStart = (event: DragEvent<HTMLDivElement>, item: IFile | IFolder) => {
    event.stopPropagation();
    setDraggedItem(item);
    event.dataTransfer.setData('text/plain', item._id);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>, folderId: string) => {
    event.preventDefault();
    event.stopPropagation();
    setDragCounter(prev => prev + 1);
    if (draggedItem && draggedItem._id !== folderId) {
      setDragOverFolder(folderId);
    }
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragCounter(prev => prev - 1);
    if (dragCounter === 1) {
      setDragOverFolder(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverFolder(null);
    setDragCounter(0);
  };

  const handleDrop = async (event: DragEvent<HTMLDivElement>, targetFolder: IFolder) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOverFolder(null);
    setDragCounter(0);

    if (!draggedItem || draggedItem._id === targetFolder._id) return;

    try {
      const response = await fetch(`/api/files/${draggedItem._id}/move`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetFolderId: targetFolder._id }),
      });

      if (!response.ok) throw new Error('移动失败');

      // 刷新文件列表
      onRefresh?.();
    } catch (error) {
      console.error('移动失败:', error);
    }
  };

  const renderFolderItem = (folder: IFolder) => (
    <div
      key={folder._id}
      draggable
      onDragStart={(e) => handleDragStart(e, folder)}
      onDragEnter={(e) => handleDragEnter(e, folder._id)}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, folder)}
      onDragEnd={handleDragEnd}
      onClick={(e) => handleItemClick(folder, e)}
      onDoubleClick={() => handleFolderDoubleClick(folder)}
      className={`
        group relative bg-white rounded-lg cursor-pointer transition-all duration-200
        ${selectedItems.some(item => item._id === folder._id) ? 'ring-2 ring-blue-500' : 'hover:bg-gray-50'}
        ${dragOverFolder === folder._id ? 'ring-2 ring-blue-500' : ''}
        ${draggedItem?._id === folder._id ? 'opacity-50' : ''}
      `}
    >
      {/* 选择框 */}
      <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <input
          type="checkbox"
          className="rounded border-gray-300"
          checked={selectedItems.some(item => item._id === folder._id)}
          onChange={(e) => {
            e.stopPropagation();
            handleItemClick(folder, { ctrlKey: true } as React.MouseEvent);
          }}
        />
      </div>

      {/* 文件夹内容 */}
      <div className="p-4">
        <div className="flex items-center justify-center h-24 mb-2">
          <FolderIcon className="w-16 h-16 text-yellow-500" />
        </div>
        <div className="text-center">
          <h3 className="text-sm font-medium text-gray-900 truncate">{folder.name}</h3>
          <p className="mt-1 text-xs text-gray-500">
            {new Date(folder.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOperationsClick(e, folder);
          }}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <EllipsisVerticalIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const renderFileItem = (file: IFile) => (
    <div
      key={file._id}
      draggable
      onDragStart={(e) => handleDragStart(e, file)}
      onDragEnd={handleDragEnd}
      onClick={(e) => handleItemClick(file, e)}
      className={`
        group relative bg-white rounded-lg cursor-pointer transition-all duration-200
        ${selectedItems.some(item => item._id === file._id) ? 'ring-2 ring-blue-500' : 'hover:bg-gray-50'}
        ${draggedItem?._id === file._id ? 'opacity-50' : ''}
      `}
    >
      {/* 选择框 */}
      <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <input
          type="checkbox"
          className="rounded border-gray-300"
          checked={selectedItems.some(item => item._id === file._id)}
          onChange={(e) => {
            e.stopPropagation();
            handleItemClick(file, { ctrlKey: true } as React.MouseEvent);
          }}
        />
      </div>

      {/* 文件内容 */}
      <div className="p-4">
        <div className="flex items-center justify-center h-24 mb-2">
          {getFileIcon(file.extension)}
        </div>
        <div className="text-center">
          <h3 className="text-sm font-medium text-gray-900 truncate">{file.name}</h3>
          <p className="mt-1 text-xs text-gray-500">
            {formatFileSize(file.size)} · {new Date(file.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOperationsClick(e, file);
          }}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <EllipsisVerticalIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  if (viewMode === 'list') {
    return (
      <div className="flex-1 overflow-auto">
        <div className="min-w-full">
          {/* 文件夹列表 */}
          <div>
            {folders.map((folder) => (
              <div
                key={folder._id}
                draggable
                onDragStart={(e) => handleDragStart(e, folder)}
                onDragEnter={(e) => handleDragEnter(e, folder._id)}
                onDragOver={(e) => e.preventDefault()}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, folder)}
                onDragEnd={handleDragEnd}
                onClick={(e) => handleItemClick(folder, e)}
                onDoubleClick={() => handleFolderDoubleClick(folder)}
                className={`
                  group flex items-center h-[52px] hover:bg-[#F5F6F7] cursor-pointer border-b border-[#E5E6E8]
                  ${selectedItems.some(item => item._id === folder._id) ? 'bg-[#F0F7FF]' : ''}
                  ${dragOverFolder === folder._id ? 'border border-blue-500' : ''}
                  ${draggedItem?._id === folder._id ? 'opacity-50' : ''}
                `}
              >
                <div className="flex-1 flex items-center min-w-0 px-6">
                  <input
                    type="checkbox"
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedItems.some(item => item._id === folder._id)}
                    onChange={(e) => e.stopPropagation()}
                  />
                  <FolderIcon className="w-5 h-5 text-[#FFB626] mr-3 flex-shrink-0" />
                  <span className="truncate text-[14px] text-[#1F2329]">{folder.name}</span>
                </div>
                <div className="w-[100px] text-[13px] text-[#646A73]">-</div>
                <div className="w-[180px] text-[13px] text-[#646A73]">
                  {new Date(folder.updatedAt).toLocaleDateString()}
                </div>
                <div className="w-[100px] text-[13px] text-[#646A73]">Me</div>
                <div className="w-[60px] flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => handleOperationsClick(e, folder)}
                    className="p-1 hover:bg-[#E8E9EB] rounded"
                  >
                    <EllipsisVerticalIcon className="w-5 h-5 text-[#646A73]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 文件列表 */}
          <div>
            {files.map((file) => (
              <div
                key={file._id}
                draggable
                onDragStart={(e) => handleDragStart(e, file)}
                onDragEnd={handleDragEnd}
                onClick={(e) => handleItemClick(file, e)}
                className={`
                  group flex items-center h-[52px] hover:bg-[#F5F6F7] cursor-pointer border-b border-[#E5E6E8]
                  ${selectedItems.some(item => item._id === file._id) ? 'bg-[#F0F7FF]' : ''}
                  ${draggedItem?._id === file._id ? 'opacity-50' : ''}
                `}
              >
                <div className="flex-1 flex items-center min-w-0 px-6">
                  <input
                    type="checkbox"
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedItems.some(item => item._id === file._id)}
                    onChange={(e) => e.stopPropagation()}
                  />
                  {getFileIcon(file.extension)}
                  <span className="ml-3 truncate text-[14px] text-[#1F2329]">{file.name}</span>
                </div>
                <div className="w-[100px] text-[13px] text-[#646A73]">
                  {formatFileSize(file.size)}
                </div>
                <div className="w-[180px] text-[13px] text-[#646A73]">
                  {new Date(file.updatedAt).toLocaleDateString()}
                </div>
                <div className="w-[100px] text-[13px] text-[#646A73]">Me</div>
                <div className="w-[60px] flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => handleOperationsClick(e, file)}
                    className="p-1 hover:bg-[#E8E9EB] rounded"
                  >
                    <EllipsisVerticalIcon className="w-5 h-5 text-[#646A73]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 文件操作菜单 */}
        {operationsTarget && (
          <FileOperations
            item={operationsTarget.item}
            position={operationsTarget.position}
            onClose={() => setOperationsTarget(null)}
          />
        )}
      </div>
    );
  }

  // 卡片视图
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="space-y-8">
        {/* 文件夹网格 */}
        {folders.length > 0 && (
          <div>
            <h2 className="text-[13px] font-medium text-[#646A73] mb-4">文件夹</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {folders.map(renderFolderItem)}
            </div>
          </div>
        )}
        
        {/* 文件网格 */}
        {files.length > 0 && (
          <div>
            <h2 className="text-[13px] font-medium text-[#646A73] mb-4">文件</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {files.map(renderFileItem)}
            </div>
          </div>
        )}

        {/* 空状态 */}
        {folders.length === 0 && files.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[400px] text-[#646A73]">
            <FolderIcon className="w-16 h-16 mb-4 text-[#646A73]" />
            <p className="text-[14px]">此文件夹为空</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileList;
