import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = ({ queryPart }: any) => {
  const navigate = useNavigate();

  // Implementing debunce on input value
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebouncedCallback(
    () => navigate(inputValue ? `/?query=${inputValue}&page=1` : "/"),
    500
  );
  // Synchronization between debouncedInputValue and queryPart
  useEffect(() => {
    setInputValue(queryPart);
  }, [queryPart]);

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
        value={inputValue}
        autoFocus={Boolean(inputValue)}
        onChange={(event) => {
          setInputValue(event.target.value);
          debouncedInputValue();
        }}
      />
      <FaSearch className="text-gray-200 absolute left-4 bottom-3" />
    </form>
  );
};

export default SearchBar;
