import { FaStar, FaRegStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const ModalMovie = ({
  singleMovie,
  setIsModalOpen,
  queryPart,
  pageNumber,
}: any) => {
  const {
    Title,
    Poster,
    imdbRating,
    Genre,
    Year,
    Plot,
    Director,
    Writer,
    Actors,
  }: any = singleMovie;

  const location = useLocation();
  const navigate = useNavigate();

  const movieData = [Genre, Year, Plot, Director, Writer, Actors];
  const movieHelpData = [
    "Genre",
    "Year",
    "About",
    "Director",
    "Writer",
    "Actors",
  ];

  // TailWindCSS styling
  const dlTagUI = "flex border-b border-gray-500 max-w-lg mt-1 mx-4";
  const dtTagUI =
    "min-w-[76px] pl-4 py-1 text-xs font-medium text-gray-400 lg:py-3";
  const ddTagUI = "pr-6 pt-0.5 text-sm font-medium text-gray-200 lg:py-2.5";
  const closeButtonUI =
    "mx-2 pt-2 pb-1.5 px-4 text-sm font-medium opacity-60 text-gray-400 ring-1 ring-gray-400 hover:opacity-100 hover:scale-[1.02] transition-all rounded-lg";
  const handleButtonUI =
    "mx-2 pt-2 pb-1.5 px-4 flex items-center justify-center text-sm font-medium opacity-80 text-yellow-500 ring-1 ring-yellow-500 hover:opacity-100 hover:bg-gray-900 hover:scale-[1.02] transition-all rounded-lg";

  return (
    <>
      <div className="h-full w-full absolute bg-black opacity-90 z-10" />
      <main className="h-full w-full absolute z-50 text-gray-200 overflow-auto">
        <div className="flex flex-col min-h-full items-center justify-center">
          <section className="m-4 mb-0 sm:mb-2">
            <h1 className="text-2xl">{Title}</h1>
          </section>
          <div className="sm:flex">
            <section className="flex justify-center px-4 min-w-fit">
              <img
                src={Poster}
                alt={`Poster: ${Title}`}
                className="h-80 my-4 border-2 border-yellow-500 rounded overflow-hidden lg:h-fit"
              />
            </section>
            <section className="mt-auto pb-4">
              <dl className={`${dlTagUI}`}>
                <dt className={`${dtTagUI} flex items-end`}>Rating:</dt>
                <dd className={`${ddTagUI} flex items-center lg:pb-1.5`}>
                  <span className="text-yellow-500 mr-1">
                    <FaStar />
                  </span>
                  <span className="text-xl font-bold">{imdbRating}</span>
                  <span className="text-gray-400">/10</span>
                </dd>
              </dl>
              {movieHelpData.map((item, index) => {
                return (
                  <dl key={index} className={`${dlTagUI}`}>
                    <dt className={`${dtTagUI}`}>{item}:</dt>
                    <dd className={`${ddTagUI}`}>{movieData[index]}</dd>
                  </dl>
                );
              })}
            </section>
          </div>
          <div className="mb-4 mt-2 flex justify-center sm:mt-4">
            <button
              className={closeButtonUI}
              onClick={() => {
                setIsModalOpen(false);
                navigate(`/?query=${queryPart}&page=${pageNumber}`);
              }}
            >
              CLOSE
            </button>
            <button className={handleButtonUI}>
              {location.pathname === "/search"
                ? "ADD TO MY LIST"
                : "REMOVE FROM LIST"}
              <span className="text-xl pl-2 -translate-y-0.5">
                {location.pathname === "/search" ? <FaStar /> : <FaRegStar />}
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ModalMovie;
