'use client';

import { FC } from 'react';
import { 
  FolderPlusIcon, 
  ArrowUpTrayIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { IFolder } from '@/types/file';
import ViewToggle, { ViewMode } from './ViewToggle';

interface FileToolbarProps {
  currentFolder: IFolder | null;
  selectedItems: any[];
  viewMode: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onCreateFolder: () => void;
  onUpload: () => void;
  onSearch: (query: string) => void;
}

const FileToolbar: FC<FileToolbarProps> = ({
  currentFolder,
  selectedItems,
  viewMode,
  onViewChange,
  onCreateFolder,
  onUpload,
  onSearch,
}) => {
  return (
    <div className="flex flex-col border-b border-[#E5E6E8]">
      {/* 顶部搜索栏和视图切换 */}
      <div className="flex items-center justify-between h-[56px] px-6 border-b border-[#E5E6E8]">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="在当前文件夹内搜索"
              className="pl-8 pr-4 py-1.5 w-[250px] border border-[#E5E6E8] rounded-lg text-[14px] text-[#1F2329] placeholder-[#86909C] focus:outline-none focus:ring-1 focus:ring-[#3370FF] focus:border-[#3370FF]"
              onChange={(e) => onSearch(e.target.value)}
            />
            <MagnifyingGlassIcon className="w-4 h-4 text-[#86909C] absolute left-2.5 top-2.5" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ViewToggle currentView={viewMode} onViewChange={onViewChange} />
        </div>
      </div>

      {/* 文件路径和操作按钮 */}
      <div className="flex items-center justify-between h-[56px] px-6">
        <div className="flex items-center text-[14px]">
          <span className="text-[#1F2329] hover:text-[#3370FF] cursor-pointer">我的空间</span>
          <ChevronRightIcon className="w-4 h-4 mx-1 text-[#86909C]" />
          <span className="text-[#1F2329] hover:text-[#3370FF] cursor-pointer">AIGC</span>
          {currentFolder && (
            <>
              <ChevronRightIcon className="w-4 h-4 mx-1 text-[#86909C]" />
              <span className="text-[#1F2329]">{currentFolder.name}</span>
            </>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onCreateFolder}
            className="flex items-center h-[32px] px-3 text-[14px] text-[#3370FF] hover:bg-[#F0F7FF] rounded"
          >
            <FolderPlusIcon className="w-4 h-4 mr-1" />
            新建文件夹
          </button>
          <button
            onClick={onUpload}
            className="flex items-center h-[32px] px-3 text-[14px] text-white bg-[#3370FF] hover:bg-[#2860DF] rounded"
          >
            <ArrowUpTrayIcon className="w-4 h-4 mr-1" />
            上传文件
          </button>
        </div>
      </div>

      {/* 列表视图的表头 */}
      {viewMode === 'list' && (
        <div className="grid grid-cols-[auto,100px,180px,100px,60px] px-6 h-[40px] bg-[#F5F6F7] text-[13px] text-[#86909C] border-t border-[#E5E6E8]">
          <div className="flex items-center">名称</div>
          <div className="flex items-center">大小</div>
          <div className="flex items-center">修改日期</div>
          <div className="flex items-center">创建者</div>
          <div className="flex items-center justify-center">操作</div>
        </div>
      )}
    </div>
  );
};

export default FileToolbar;
