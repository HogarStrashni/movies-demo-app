import { RiMovie2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // TailWindCSS styling
  const buttonUI =
    "m-4 px-8 py-2 flex items-center text-sm font-medium text-gray-200 ring-1 ring-gray-200 hover:text-blue-300 hover:ring-blue-300 hover:bg-slate-800 rounded-lg sm:px-12";
  const linksUI =
    "px-3 py-2 rounded-lg hover:ring-1 hover:ring-blue-300 hover:text-blue-300 cursor-pointer";

  return (
    <header className="bg-slate-900 px-4 border-b-2 border-b-gray-800 flex flex-col items-center lg:px-16 md:px-12 sm:px-6">
      <div className="w-full mt-2 text-gray-200 flex flex-col items-center italic font-bold sm:flex-row sm:mt-8 sm:mb-5">
        <div className="flex">
          <RiMovie2Line className="text-3xl text-blue-300" />
          <span className="text-2xl text-blue-300">MY</span>
          <span className="text-2xl">MOVIELIST</span>
        </div>
        <div className="w-64 flex justify-between items-center text-sm font-medium text-gray-200 sm:ml-auto">
          <p onClick={() => navigate("/")} className={linksUI}>
            Home
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Film"
            target="_blanc"
            className={linksUI}
          >
            Wikipedia
          </a>
          <a href="https://www.imdb.com/" target="_blanc" className={linksUI}>
            IMDB
          </a>
        </div>
      </div>
      <div className="flex mb-2">
        <button className={buttonUI}>SEARCH</button>
        <button className={buttonUI}>MY LIST</button>
      </div>
    </header>
  );
};

export default Header;
