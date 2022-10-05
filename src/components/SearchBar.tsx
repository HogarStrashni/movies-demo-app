import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const location = useLocation();
  return (
    <form
      className="relative w-full mx-4"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="text"
        className={`w-full p-2 pl-10 text-gray-200 bg-black border outline-none focus:ring-1 ring-blue-300 focus:border-blue-300 hover:bg-gray-900 z-5 shadow-sm rounded-lg ${
          location.pathname === "/search"
            ? "border-yellow-500"
            : "border-gray-200"
        }`}
        placeholder="Search..."
      />
      <FaSearch className="text-gray-200 absolute left-4 bottom-3" />
    </form>
  );
};

export default SearchBar;
