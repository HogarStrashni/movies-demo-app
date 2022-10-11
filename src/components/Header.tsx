import { RiMovie2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Badge from "./Badge";
import { headerUI } from "../assets/tailwindCSS";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-black px-4 flex flex-col items-center lg:px-16 md:px-12 sm:px-6">
      <div className="w-full mt-2 text-gray-200 flex flex-col items-center italic font-bold sm:flex-row sm:mt-8 sm:mb-2">
        <div
          className="flex hover:cursor-pointer hover:text-blue-300 hover:scale-[1.04] transition-all"
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
            className={headerUI.links}
          >
            Wikipedia
          </a>
          <a
            href="https://www.imdb.com/"
            target="_blanc"
            className={headerUI.links}
          >
            IMDB
          </a>
          <a
            href="https://www.netflix.com/"
            target="_blanc"
            className={headerUI.links}
          >
            Netflix
          </a>
        </div>
      </div>
      <div className="flex mb-2">
        <button className={headerUI.buttons} onClick={() => navigate("/")}>
          SEARCH
        </button>
        <button
          className={headerUI.buttons}
          onClick={() => navigate("/my-list")}
        >
          MY LIST
          <span>
            <Badge />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
