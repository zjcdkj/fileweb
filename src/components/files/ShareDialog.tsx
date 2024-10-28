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
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/files/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileId: 'extension' in item ? item._id : undefined,
          folderId: !('extension' in item) ? item._id : undefined,
          password: shareType === 'password' ? password : undefined,
          expiresIn: expiryDays === 'forever' ? null : parseInt(expiryDays) * 24 * 60 * 60 * 1000,
        }),
      });

      if (!response.ok) throw new Error('创建分享失败');

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
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('复制失败:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="px-6 py-4 border-b border-[#E5E6E8] flex justify-between items-center">
          <h3 className="text-[16px] font-medium text-[#1F2329]">分享 {item.name}</h3>
          <button onClick={onClose} className="text-[#646A73] hover:text-[#1F2329]">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1F2329] mb-2">分享方式</label>
            <div className="flex space-x-4">
              <button
                onClick={() => setShareType('link')}
                className={`px-4 py-2 rounded ${
                  shareType === 'link'
                    ? 'bg-[#F0F7FF] text-[#3370FF]'
                    : 'bg-[#F5F6F7] text-[#1F2329]'
                }`}
              >
                链接分享
              </button>
              <button
                onClick={() => setShareType('password')}
                className={`px-4 py-2 rounded ${
                  shareType === 'password'
                    ? 'bg-[#F0F7FF] text-[#3370FF]'
                    : 'bg-[#F5F6F7] text-[#1F2329]'
                }`}
              >
                密码分享
              </button>
            </div>
          </div>

          {shareType === 'password' && (
            <div>
              <label className="block text-sm font-medium text-[#1F2329] mb-2">
                访问密码
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-[#E5E6E8] rounded-lg text-[14px]"
                placeholder="请输入访问密码"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-[#1F2329] mb-2">
              有效期
            </label>
            <select
              value={expiryDays}
              onChange={(e) => setExpiryDays(e.target.value)}
              className="w-full px-3 py-2 border border-[#E5E6E8] rounded-lg text-[14px]"
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
              className="w-full py-2 bg-[#3370FF] text-white rounded-lg hover:bg-[#2860DF] disabled:opacity-50"
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
                  className="flex-1 px-3 py-2 border border-[#E5E6E8] rounded-lg bg-[#F5F6F7]"
                />
                <button
                  onClick={handleCopyLink}
                  className="p-2 text-[#3370FF] hover:bg-[#F0F7FF] rounded"
                >
                  <ClipboardIcon className="w-5 h-5" />
                </button>
              </div>
              {copied && (
                <p className="text-[13px] text-green-500">链接已复制到剪贴板</p>
              )}
              {shareType === 'password' && (
                <p className="text-[13px] text-[#646A73]">
                  访问密码：{password}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareDialog;
