import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form
      className="relative w-full mx-4"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="text"
        className="w-full p-2.5 pl-11 text-sm text-gray-900 bg-gray-100 border border-gray-300 outline-none focus:ring-2 ring-blue-400 focus:border-blue-400 hover:bg-gray-200 z-5 shadow-sm rounded-lg"
        placeholder="Search..."
      />
      <FaSearch className="text-gray-500 absolute left-4 bottom-3.5" />
    </form>
  );
};

export default SearchBar;
