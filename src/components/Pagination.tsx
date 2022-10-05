import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPages }: any) => {
  // for buttons control purposes
  const [currentPage, setCurrentPage] = useState(1);

  // TailWindCSS styling
  const pagButton =
    "py-0.5 text-xs font-medium text-gray-700 bg-white border border-blue-100 focus:outline-none hover:bg-gray-200 rounded-lg";
  const pagButtonDisabled =
    "w-8 mx-2 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <>
      <div className="flex justify-center align-center m-8">
        <button
          className={`${pagButton} ${pagButtonDisabled}`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <FaChevronLeft className="text-center inline pb-1" />
        </button>
        <p className="mx-2 text-sm font-medium text-gray-200 italic">
          current page: {currentPage} / {totalPages}
        </p>
        <button
          className={`${pagButton} ${pagButtonDisabled}`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <FaChevronRight className="text-center inline pb-1" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
