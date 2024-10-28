import React from 'react';
import { 
  DocumentIcon, 
  PhotoIcon, 
  VideoCameraIcon,
  MusicalNoteIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  TableCellsIcon,
  ArrowDownTrayIcon,
  TrashIcon,
  ArrowPathIcon,
  DocumentDuplicateIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

export function getFileIcon(extension: string): React.ReactNode {
  const iconClass = 'w-8 h-8';
  
  // 图片文件
  if (/^(jpg|jpeg|png|gif|bmp|webp)$/i.test(extension)) {
    return <PhotoIcon className={`${iconClass} text-green-500`} />;
  }
  
  // 视频文件
  if (/^(mp4|avi|mov|wmv|flv|mkv)$/i.test(extension)) {
    return <VideoCameraIcon className={`${iconClass} text-blue-500`} />;
  }
  
  // 音频文件
  if (/^(mp3|wav|ogg|m4a)$/i.test(extension)) {
    return <MusicalNoteIcon className={`${iconClass} text-purple-500`} />;
  }
  
  // 代码文件
  if (/^(js|ts|py|java|cpp|c|php|html|css|jsx|tsx)$/i.test(extension)) {
    return <CodeBracketIcon className={`${iconClass} text-gray-500`} />;
  }
  
  // 文档文件
  if (/^(doc|docx|pdf|txt|md)$/i.test(extension)) {
    return <DocumentTextIcon className={`${iconClass} text-blue-500`} />;
  }
  
  // 表格文件
  if (/^(xls|xlsx|csv)$/i.test(extension)) {
    return <TableCellsIcon className={`${iconClass} text-green-500`} />;
  }
  
  // 默认图标
  return <DocumentIcon className={`${iconClass} text-gray-500`} />;
}

export const fileOperations = [
  {
    type: 'download' as const,
    label: '下载',
    icon: ArrowDownTrayIcon,
  },
  {
    type: 'delete' as const,
    label: '删除',
    icon: TrashIcon,
  },
  {
    type: 'move' as const,
    label: '移动到',
    icon: ArrowPathIcon,
  },
  {
    type: 'copy' as const,
    label: '复制到',
    icon: DocumentDuplicateIcon,
  },
  {
    type: 'share' as const,
    label: '分享',
    icon: ShareIcon,
  },
];

export function getFileOperations(isFolder: boolean) {
  return fileOperations.filter(op => 
    isFolder ? op.type !== 'download' : true
  );
}
