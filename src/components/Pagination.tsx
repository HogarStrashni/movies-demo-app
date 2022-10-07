import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Pagination = ({ totalPages, queryPart, pageNumber }: any) => {
  const navigate = useNavigate();

  // TailWindCSS styling
  const pagButtonUI =
    "pt-0.5 text-xs font-medium text-yellow-500 bg-black border border-yellow-500 focus:outline-none hover:bg-gray-900 hover:scale-[1.06] transition-all rounded-lg";
  const pagButtonDisabledUI =
    "w-8 mx-2 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100";

  return (
    totalPages && (
      <div className="flex justify-center align-center m-6">
        <button
          className={`${pagButtonUI} ${pagButtonDisabledUI}`}
          onClick={() =>
            navigate(`/?query=${queryPart}&page=${Number(pageNumber) - 1}`)
          }
          disabled={pageNumber <= 1}
        >
          <FaChevronLeft className="text-center inline pb-1" />
        </button>
        <p className="mx-2 text-sm font-medium text-gray-400 italic">
          current page: {pageNumber} / {totalPages}
        </p>
        <button
          className={`${pagButtonUI} ${pagButtonDisabledUI}`}
          onClick={() =>
            navigate(`/?query=${queryPart}&page=${Number(pageNumber) + 1}`)
          }
          disabled={pageNumber >= totalPages}
        >
          <FaChevronRight className="text-center inline pb-1" />
        </button>
      </div>
    )
  );
};

export default Pagination;
