'use client';

import { FC, useState } from 'react';
import { XMarkIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { IFile, IFolder } from '@/types/file';

interface ShareDialogProps {
  isOpen: boolean;
  item: IFile | IFolder;
  onClose: () => void;
}

const ShareDialog: FC<ShareDialogProps> = ({ isOpen, item, onClose }) => {
  const [shareType, setShareType] = useState<'link' | 'password'>('link');
  const [password, setPassword] = useState('');
  const [expiryDays, setExpiryDays] = useState('7');
  const [shareUrl, setShareUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleShare = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/files/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileId: item._id,
          password: shareType === 'password' ? password : undefined,
          expiresIn: parseInt(expiryDays) * 24 * 60 * 60 * 1000, // 转换为毫秒
        }),
      });

      if (!response.ok) throw new Error('分享创建失败');

      const data = await response.json();
      setShareUrl(`${window.location.origin}/share/${data.code}`);
    } catch (error) {
      console.error('分享失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('链接已复制到剪贴板');
    } catch (error) {
      console.error('复制失败:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">分享 {item.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              分享方式
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setShareType('link')}
                className={`px-4 py-2 rounded ${
                  shareType === 'link'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                链接分享
              </button>
              <button
                onClick={() => setShareType('password')}
                className={`px-4 py-2 rounded ${
                  shareType === 'password'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                密码分享
              </button>
            </div>
          </div>

          {shareType === 'password' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                访问密码
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入访问密码"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              有效期
            </label>
            <select
              value={expiryDays}
              onChange={(e) => setExpiryDays(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">1天</option>
              <option value="7">7天</option>
              <option value="30">30天</option>
              <option value="forever">永久有效</option>
            </select>
          </div>

          {!shareUrl && (
            <button
              onClick={handleShare}
              disabled={isLoading}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? '创建中...' : '创建分享链接'}
            </button>
          )}

          {shareUrl && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="flex-1 px-3 py-2 border rounded-lg bg-gray-50"
                />
                <button
                  onClick={handleCopyLink}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                >
                  <ClipboardIcon className="w-5 h-5" />
                </button>
              </div>
              {shareType === 'password' && (
                <div className="text-sm text-gray-500">
                  访问密码：{password}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareDialog;
