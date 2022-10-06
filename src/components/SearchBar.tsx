import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ queryPart, pageNumber }: any) => {
  const navigate = useNavigate();

  console.log(queryPart);
  console.log(pageNumber);

  return (
    <form
      className="relative w-full mx-4 hover:scale-[1.01] transition-all"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="text"
        className={`w-full p-2 pl-10 text-gray-200 bg-transparent border outline-none focus:ring-1 ring-blue-300 focus:border-blue-300 z-5 shadow-sm rounded-lg ${
          queryPart ? "border-yellow-500" : "border-blue-300"
        }`}
        placeholder="Search..."
        value={queryPart}
        autoFocus={queryPart}
        onChange={(event) =>
          event.target.value
            ? navigate(`/?s=${event.target.value}&page=${pageNumber}`)
            : navigate("/")
        }
      />
      <FaSearch className="text-gray-200 absolute left-4 bottom-3" />
    </form>
  );
};

export default SearchBar;
