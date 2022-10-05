import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPages }: any) => {
  // for buttons control purposes
  const [currentPage, setCurrentPage] = useState(1);

  // TailWindCSS styling
  const pagButtonUI =
    "pt-0.5 text-xs font-medium text-yellow-500 bg-black border border-yellow-500 focus:outline-none hover:bg-gray-900 rounded-lg";
  const pagButtonDisabledUI =
    "w-8 mx-2 disabled:opacity-30 disabled:cursor-not-allowed";

  return (
    <>
      <div className="flex justify-center align-center m-6">
        <button
          className={`${pagButtonUI} ${pagButtonDisabledUI}`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <FaChevronLeft className="text-center inline pb-1" />
        </button>
        <p className="mx-2 text-sm font-medium text-gray-400 italic">
          current page: {currentPage} / {totalPages}
        </p>
        <button
          className={`${pagButtonUI} ${pagButtonDisabledUI}`}
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
