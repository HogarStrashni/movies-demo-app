import { RiMovie2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Badge from "./Badge";

const Header = () => {
  const navigate = useNavigate();

  // TailWindCSS styling
  const buttonUI =
    "w-40 m-4 py-1.5 flex items-center justify-center text-sm font-medium text-gray-200 ring-1 ring-gray-200 hover:text-blue-300 hover:ring-blue-300 hover:bg-slate-800 rounded-lg sm:px-2";
  const linksUI =
    "px-3 py-2 rounded-lg hover:ring-1 hover:ring-blue-300 hover:text-blue-300 cursor-pointer";

  return (
    <header className="bg-black px-4 flex flex-col items-center lg:px-16 md:px-12 sm:px-6">
      <div className="w-full mt-2 text-gray-200 flex flex-col items-center italic font-bold sm:flex-row sm:mt-8 sm:mb-2">
        <div
          className="flex hover:cursor-pointer hover:opacity-90"
          onClick={() => navigate("/")}
        >
          <RiMovie2Line className="text-3xl text-blue-300" />
          <span className="text-2xl text-blue-300">MY</span>
          <span className="text-2xl">MOVIELIST</span>
        </div>
        <div className="w-64 flex justify-between items-center text-sm font-medium text-gray-200 sm:ml-auto">
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
          <a
            href="https://www.netflix.com/"
            target="_blanc"
            className={linksUI}
          >
            Netflix
          </a>
        </div>
      </div>
      <div className="flex mb-2">
        <button className={buttonUI} onClick={() => navigate("/search")}>
          SEARCH
        </button>
        <button className={buttonUI} onClick={() => navigate("/my-list")}>
          MY LIST
          <span className="pl-2">
            <Badge />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
