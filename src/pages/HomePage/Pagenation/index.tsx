import React from 'react';
import Button from '@components/Button';

interface PaginationProps {
  currentPage: number | null;
  totalPages: number | null;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= (totalPages || 0); i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => onPageChange(i)}
          disabled={i === currentPage}
          className={`w-8 h-8 flex justify-center items-center rounded-full ${
            i === currentPage ? 'bg-orange-500 text-white' : 'text-primary-50'
          }`}
        >
          {i}
        </Button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center gap-2 mt-6">
      <Button 
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1}
        className="flex items-center justify-center w-8 h-8 text-primary-50"
      >
        {"<<"}
      </Button>
      <Button 
        onClick={() => onPageChange(currentPage! - 1)} 
        disabled={currentPage === 1}
        className="flex items-center justify-center w-8 h-8 text-primary-50"
      >
        {"<"}
      </Button>

      {renderPageNumbers()}

      <Button 
        onClick={() => onPageChange(currentPage! + 1)} 
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-8 h-8 text-primary-50"
      >
        {">"}
      </Button>
      <Button 
        onClick={() => onPageChange(totalPages!)} 
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-8 h-8 text-primary-50"
      >
        {">>"}
      </Button>
    </div>
  );
};

export default Pagination;
