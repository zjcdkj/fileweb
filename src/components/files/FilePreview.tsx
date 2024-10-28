'use client';

import { FC } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { IFile } from '@/types/file';

interface FilePreviewProps {
  file: IFile;
  isOpen: boolean;
  onClose: () => void;
}

const FilePreview: FC<FilePreviewProps> = ({ file, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getPreviewContent = () => {
    const fileType = file.type.split('/')[0];
    const fileUrl = `/api/files/preview/${file._id}`;

    switch (fileType) {
      case 'image':
        return <img src={fileUrl} alt={file.name} className="max-w-full max-h-[80vh] object-contain" />;
      case 'video':
        return (
          <video controls className="max-w-full max-h-[80vh]">
            <source src={fileUrl} type={file.type} />
            Your browser does not support the video tag.
          </video>
        );
      case 'audio':
        return (
          <audio controls className="w-full">
            <source src={fileUrl} type={file.type} />
            Your browser does not support the audio tag.
          </audio>
        );
      case 'application':
        if (file.type === 'application/pdf') {
          return (
            <iframe
              src={`${fileUrl}#view=FitH`}
              className="w-full h-[80vh]"
              title={file.name}
            />
          );
        }
      default:
        return (
          <div className="text-center p-8">
            <p>此文件类型暂不支持预览</p>
            <button
              onClick={() => window.open(fileUrl)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              下载文件
            </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-6xl mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="bg-white rounded-lg p-4">
          <div className="mb-4 px-4 py-2 border-b">
            <h3 className="text-lg font-medium">{file.name}</h3>
          </div>
          <div className="flex items-center justify-center">
            {getPreviewContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
