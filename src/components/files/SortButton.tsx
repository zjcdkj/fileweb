import { FC } from 'react';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';

export type SortField = 'name' | 'size' | 'updatedAt';
export type SortOrder = 'asc' | 'desc';

interface SortButtonProps {
  field: SortField;
  currentField: SortField;
  currentOrder: SortOrder;
  onChange: (field: SortField, order: SortOrder) => void;
  children: React.ReactNode;
}

const SortButton: FC<SortButtonProps> = ({
  field,
  currentField,
  currentOrder,
  onChange,
  children,
}) => {
  const handleClick = () => {
    if (currentField === field) {
      onChange(field, currentOrder === 'asc' ? 'desc' : 'asc');
    } else {
      onChange(field, 'asc');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center hover:text-[#1F2329]"
    >
      {children}
      {currentField === field && (
        <ArrowsUpDownIcon 
          className={`w-4 h-4 ml-1 transition-transform ${
            currentOrder === 'desc' ? 'transform rotate-180' : ''
          }`}
        />
      )}
    </button>
  );
};

export default SortButton;
