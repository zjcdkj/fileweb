'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import FileList from '@/components/files/FileList';
import FileToolbar from '@/components/files/FileToolbar';
import FileUpload from '@/components/files/FileUpload';
import { IFile, IFolder } from '@/types/file';
import CreateFolderDialog from '@/components/files/CreateFolderDialog';
import { ViewMode } from '@/components/files/ViewToggle';
import { SortField, SortOrder } from '@/components/files/SortButton';

export default function FilesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [currentFolder, setCurrentFolder] = useState<IFolder | null>(null);
  const [files, setFiles] = useState<IFile[]>([]);
  const [folders, setFolders] = useState<IFolder[]>([]);
  const [selectedItems, setSelectedItems] = useState<(IFile | IFolder)[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [allFolders, setAllFolders] = useState<IFolder[]>([]);
  const [folderPath, setFolderPath] = useState<IFolder[]>([]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      loadFiles();
    }
  }, [status, currentFolder]);

  const loadFiles = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/files/list${currentFolder ? `?folderId=${currentFolder._id}` : ''}`
      );
      
      if (!response.ok) {
        throw new Error('加载文件失败');
      }

      const data = await response.json();
      setFiles(data.files);
      setFolders(data.folders);
      setAllFolders(data.allFolders);
      setFolderPath(data.folderPath || []);
    } catch (error) {
      console.error('加载文件错误:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 添加强制刷新函数
  const handleRefresh = async () => {
    await loadFiles();
  };

  const handleFolderOpen = (folder: IFolder | null) => {
    setCurrentFolder(folder);
    setSelectedItems([]);
  };

  // 添加搜索处理函数
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // TODO: 实现搜索逻辑
  };

  const handleSort = (field: SortField, order: SortOrder) => {
    setSortField(field);
    setSortOrder(order);
    
    const sortedFiles = [...files].sort((a, b) => {
      if (field === 'name') {
        return order === 'asc' 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (field === 'size') {
        return order === 'asc'
          ? a.size - b.size
          : b.size - a.size;
      }
      return order === 'asc'
        ? new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        : new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });

    setFiles(sortedFiles);
  };

  if (status === 'loading' || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <Sidebar /> {/* 添加回 Sidebar */}
      <div className="w-[50px]" /> {/* 左侧留白 */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        <FileToolbar 
          currentFolder={currentFolder}
          selectedItems={selectedItems}
          viewMode={viewMode}
          onViewChange={setViewMode}
          onCreateFolder={() => setIsCreatingFolder(true)}
          onUpload={() => setIsUploading(true)}
          onSearch={handleSearch}
          onFolderOpen={handleFolderOpen}
          folderPath={folderPath}
          allFolders={allFolders}
        />
        <div className="flex-1 overflow-hidden flex flex-col">
          <FileList
            files={files}
            folders={folders}
            selectedItems={selectedItems}
            viewMode={viewMode}
            onSelect={setSelectedItems}
            onFolderOpen={setCurrentFolder}
            onRefresh={handleRefresh}
            sortField={sortField}
            sortOrder={sortOrder}
            onSort={handleSort}
          />
        </div>
        <FileUpload
          isOpen={isUploading}
          currentFolder={currentFolder}
          onClose={() => setIsUploading(false)}
          onUploadComplete={(uploadedFiles) => {
            if (Array.isArray(uploadedFiles) && uploadedFiles.length > 0) {
              setFiles(prevFiles => [...prevFiles, ...uploadedFiles]);
            }
            setIsUploading(false);
          }}
        />
        <CreateFolderDialog
          isOpen={isCreatingFolder}
          currentFolder={currentFolder}
          onClose={() => setIsCreatingFolder(false)}
          onCreated={(newFolder) => {
            setFolders(prevFolders => [...prevFolders, newFolder]);
            setIsCreatingFolder(false);
          }}
        />
      </div>
      <div className="w-[50px]" /> {/* 右侧留白 */}
    </div>
  );
}
