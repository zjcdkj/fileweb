'use client';

import { FC, useState, useRef } from 'react';
import { XMarkIcon, ArrowUpTrayIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { IFile, IFolder } from '@/types/file';

interface FileUploadProps {
  isOpen: boolean;
  currentFolder: IFolder | null;
  onClose: () => void;
  onUploadComplete: (files: IFile[]) => void;
}

interface UploadingFile {
  file: File;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

const FileUpload: FC<FileUploadProps> = ({
  isOpen,
  currentFolder,
  onClose,
  onUploadComplete,
}) => {
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFileSelect = async (files: FileList | null) => {
    if (!files?.length) return;
    
    const newFiles = Array.from(files);
    setUploadingFiles(newFiles.map(file => ({
      file,
      progress: 0,
      status: 'uploading'
    })));

    const uploadedFiles = [];

    for (let i = 0; i < newFiles.length; i++) {
      const file = newFiles[i];
      const formData = new FormData();
      formData.append('file', file);
      if (currentFolder) {
        formData.append('folderId', currentFolder._id);
      }

      try {
        // 使用 XMLHttpRequest 来获取上传进度
        const xhr = new XMLHttpRequest();
        
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            setUploadingFiles(prev => prev.map((item, index) => 
              index === i ? { ...item, progress } : item
            ));
          }
        };

        const response = await new Promise<any>((resolve, reject) => {
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                resolve(JSON.parse(xhr.responseText));
              } catch (e) {
                reject(new Error('Invalid JSON response'));
              }
            } else {
              reject(new Error('Upload failed'));
            }
          };
          xhr.onerror = () => reject(new Error('Network error'));
          
          xhr.open('POST', '/api/files/upload');
          xhr.send(formData);
        });

        uploadedFiles.push(response.file);
        
        setUploadingFiles(prev => prev.map((item, index) => 
          index === i ? { ...item, progress: 100, status: 'success' } : item
        ));

      } catch (error) {
        setUploadingFiles(prev => prev.map((item, index) => 
          index === i ? { 
            ...item, 
            status: 'error',
            error: error instanceof Error ? error.message : '上传失败'
          } : item
        ));
      }
    }

    if (uploadedFiles.length > 0) {
      onUploadComplete(uploadedFiles);
      // 显示上传成功消息
      setShowSuccessMessage(true);
      // 3秒后自动隐藏消息并关闭对话框
      setTimeout(() => {
        setShowSuccessMessage(false);
        onClose();
      }, 3000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl relative">
        {/* 成功消息提示 */}
        {showSuccessMessage && (
          <div className="absolute top-0 left-0 right-0 -mt-12 flex justify-center">
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
              <CheckCircleIcon className="w-5 h-5 mr-2" />
              上传完成
            </div>
          </div>
        )}

        {/* 标题栏 */}
        <div className="px-6 py-4 border-b border-[#E5E6E8] flex justify-between items-center">
          <h3 className="text-[16px] font-medium text-[#1F2329]">上传文件</h3>
          <button 
            onClick={onClose}
            className="text-[#646A73] hover:text-[#1F2329] transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* 上传区域 */}
        <div className="p-6">
          <div
            className={`
              border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
              transition-all duration-200
              ${isDragging 
                ? 'border-[#3370FF] bg-[#F0F7FF]' 
                : 'border-[#E5E6E8] hover:border-[#3370FF] hover:bg-[#F5F6F7]'
              }
            `}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              onChange={(e) => handleFileSelect(e.target.files)}
            />
            <ArrowUpTrayIcon className="w-8 h-8 mx-auto mb-3 text-[#646A73]" />
            <p className="text-[14px] text-[#1F2329] mb-1">
              点击或拖拽文件到此处上传
            </p>
            <p className="text-[13px] text-[#646A73]">
              支持各种常用文件格式
            </p>
          </div>

          {/* 上传列表 */}
          {uploadingFiles.length > 0 && (
            <div className="mt-4 space-y-3">
              {uploadingFiles.map((file, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[14px] text-[#1F2329] truncate flex-1">
                      {file.file.name}
                    </span>
                    <span className={`text-[13px] ml-2 ${
                      file.status === 'success' ? 'text-green-500' :
                      file.status === 'error' ? 'text-red-500' :
                      'text-[#646A73]'
                    }`}>
                      {file.status === 'uploading' ? `${file.progress}%` :
                       file.status === 'success' ? '完成' : '失败'}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#F5F6F7] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-200 ${
                        file.status === 'error' ? 'bg-[#FF4D4F]' :
                        file.status === 'success' ? 'bg-[#52C41A]' : 'bg-[#3370FF]'
                      }`}
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                  {file.error && (
                    <p className="mt-1 text-[13px] text-[#FF4D4F]">{file.error}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
