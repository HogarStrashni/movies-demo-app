import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMyMoviesData } from "../context/myMoviesContext";
import { infoToasterChanges } from "../utils/infoToasterLogic";
import { modalMovieUI } from "../assets/tailwindCSS";

const ModalMovie = ({
  singleMovie,
  setIsModalOpen,
  queryPart,
  pageNumber,
}: any) => {
  const { myMovies, setMyMovies, myMovieIDs }: any = useMyMoviesData();

  const {
    imdbID,
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

  const addMovieHandler = () => {
    setMyMovies([...myMovies, singleMovie]);
    setIsModalOpen(false);
    infoToasterChanges("Movie successfully added to My List");
    queryPart
      ? navigate(`/?query=${queryPart}&page=${pageNumber}`)
      : navigate("/my-list");
  };

  const removeMovieHandler = () => {
    setMyMovies(myMovies.filter((item: any) => item.imdbID !== imdbID));
    setIsModalOpen(false);
    infoToasterChanges("Movie successfully removed from My List");
    queryPart
      ? navigate(`/?query=${queryPart}&page=${pageNumber}`)
      : navigate("/my-list");
  };

  return (
    <>
      <div className="h-full w-full absolute bg-black opacity-[0.95] z-10" />
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
              <dl className={`${modalMovieUI.dlTag}`}>
                <dt className={`${modalMovieUI.dtTag} flex items-end`}>
                  Rating:
                </dt>
                <dd
                  className={`${modalMovieUI.ddTag} flex items-center lg:pb-1.5`}
                >
                  <span className="text-yellow-500 mr-1">
                    <FaStar />
                  </span>
                  <span className="text-xl font-bold">{imdbRating}</span>
                  <span className="text-gray-400">/10</span>
                </dd>
              </dl>
              {movieHelpData.map((item, index) => {
                return (
                  <dl key={index} className={`${modalMovieUI.dlTag}`}>
                    <dt className={`${modalMovieUI.dtTag}`}>{item}:</dt>
                    <dd className={`${modalMovieUI.ddTag}`}>
                      {movieData[index]}
                    </dd>
                  </dl>
                );
              })}
            </section>
          </div>
          <div className="mb-4 mt-2 flex justify-center sm:mt-4">
            <button
              className={modalMovieUI.closeButton}
              onClick={() => {
                setIsModalOpen(false);
                queryPart
                  ? navigate(`/?query=${queryPart}&page=${pageNumber}`)
                  : navigate("/my-list");
              }}
            >
              CLOSE
            </button>
            {!myMovieIDs.has(imdbID) ? (
              <button
                className={modalMovieUI.handleButton}
                onClick={addMovieHandler}
              >
                ADD TO MY LIST
                <span className="text-xl pl-2 -translate-y-0.5">
                  <FaStar />
                </span>
              </button>
            ) : (
              <button
                className={modalMovieUI.handleButton}
                onClick={removeMovieHandler}
              >
                REMOVE FROM LIST
                <span className="text-xl pl-2 -translate-y-0.5">
                  <FaRegStar />
                </span>
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ModalMovie;
