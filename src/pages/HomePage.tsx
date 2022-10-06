import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import { axiosInstance } from "../services/httpClient";

import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import LoadingStage from "../components/LoadingStage";
import ModalMovie from "../components/ModalMovie";
import { infoChanged } from "../services/toastLogic";

const BASE_URL_SINGLE: string = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&type=movie&i=tt0372784`;

function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const queryPart: string = searchParams.get("s") ?? "";
  let pageNumber: string | number = searchParams.get("page") ?? 1;

  const [singleMovie, setSingleMovie] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/", {
        params: {
          apikey: import.meta.env.VITE_API_KEY,
          type: "movie",
          s: queryPart,
          page: pageNumber,
        },
      })
      .then((response) => {
        setMovieList(response.data.Search);
        setTotalPages(Math.ceil(response.data.totalResults / 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  }, [queryPart, pageNumber]);

  useEffect(() => {
    axios
      .get(BASE_URL_SINGLE)
      .then((response) => setSingleMovie(response.data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log(movieList);
  console.log(totalPages);
  console.log(singleMovie);

  return (
    <>
      {isModalOpen && <ModalMovie singleMovie={singleMovie} />}
      {isLoading && <LoadingStage />}
      <main
        className={`bg-black ${
          !movieList?.length && "bg-movieBGP bg-no-repeat bg-cover bg-center"
        } flex-1 overflow-auto`}
      >
        <div className="max-w-lg mx-auto pt-6 flex justify-center">
          <SearchBar queryPart={queryPart} pageNumber={pageNumber} />
        </div>
        {!queryPart && (
          <div className="h-[calc(100%-120px)] py-auto text-gray-300 text-center flex flex-col justify-center flex-1">
            <h1 className="text-5xl pb-8 text-blue-400">
              ADD MOVIE TO YOUR LIST
            </h1>
            <p className="text-2xl">
              Find all about movies with a simple search
            </p>
            <p>or</p>
            <p className="text-2xl">
              Make your plan which movies to watch next weekend
            </p>
          </div>
        )}
        {queryPart && !movieList?.length && (
          <div className="h-[calc(100%-120px)] pb-8 py-auto text-gray-300 text-center flex flex-col justify-center flex-1">
            <p className="text-2xl">
              The search query should contain the exact word of the movie title
            </p>
          </div>
        )}
        <div className="flex justify-center">
          <section className="mx-auto mt-6 grid grid-cols-1 gap-4 justify-center content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movieList?.map((item) => {
              const { imdbID, Poster, Title } = item;
              return (
                <MovieCard
                  key={imdbID}
                  poster={Poster}
                  title={Title}
                  infoChanged={infoChanged}
                />
              );
            })}
          </section>
        </div>
        <Pagination totalPages={totalPages} />
      </main>
    </>
  );
}

export default HomePage;
