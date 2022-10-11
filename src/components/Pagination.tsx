import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { paginationUI } from "../assets/tailwindCSS";

const Pagination = ({ totalPages, queryPart, pageNumber }: any) => {
  const navigate = useNavigate();

  return (
    totalPages && (
      <div className="max-w-fit mx-auto flex justify-center align-center m-5">
        <button
          className={`${paginationUI.button} ${paginationUI.buttonDisabled}`}
          onClick={() =>
            navigate(`/?query=${queryPart}&page=${Number(pageNumber) - 1}`)
          }
          disabled={pageNumber <= 1}
        >
          <FaChevronLeft className="text-center inline pb-1" />
        </button>
        <p className="px-2 text-sm font-medium text-yellow-500 italic rounded-lg bg-black bg-opacity-50">
          current page: {pageNumber} / {totalPages}
        </p>
        <button
          className={`${paginationUI.button} ${paginationUI.buttonDisabled}`}
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
