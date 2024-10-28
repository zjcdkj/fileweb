'use client';

import { FC } from 'react';
import { Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline';

export type ViewMode = 'grid' | 'list';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const ViewToggle: FC<ViewToggleProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => onViewChange('grid')}
        className={`p-1.5 rounded ${
          currentView === 'grid'
            ? 'bg-white shadow text-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        title="卡片视图"
      >
        <Squares2X2Icon className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-1.5 rounded ${
          currentView === 'list'
            ? 'bg-white shadow text-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        title="列表视图"
      >
        <ListBulletIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ViewToggle;
