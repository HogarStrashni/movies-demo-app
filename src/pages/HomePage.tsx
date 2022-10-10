import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/httpClient";

import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import LoadingStage from "../components/LoadingStage";
import ModalMovie from "../components/ModalMovie";
import LandingPart from "../components/LandingPart";

function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const queryPart: string = searchParams.get("query") ?? "";
  const pageNumber: string | number = searchParams.get("page") ?? 1;

  const navigate = useNavigate();
  const titleID: string = searchParams.get("title") ?? "";

  const [singleMovie, setSingleMovie] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
    if (titleID) {
      setIsLoading(true);
      axiosInstance
        .get("/", {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            type: "movie",
            i: titleID,
          },
        })
        .then((response) => setSingleMovie(response.data))
        .then(() => {
          setIsLoading(false);
          setIsModalOpen(true);
        })
        .catch((error) => {
          console.log(error.message);
          setIsLoading(false);
        });
    }
  }, [titleID]);

  useEffect(() => {
    !titleID && setIsModalOpen(false);
  }, [titleID]);

  return (
    <>
      {isLoading && <LoadingStage />}
      {isModalOpen && (
        <ModalMovie
          singleMovie={singleMovie}
          setIsModalOpen={setIsModalOpen}
          queryPart={queryPart}
          pageNumber={pageNumber}
        />
      )}

      <main
        className={`bg-black ${
          !movieList?.length && "bg-movieBGP bg-no-repeat bg-cover bg-center"
        } flex-1 overflow-auto`}
      >
        <div className="max-w-lg mx-auto pt-6 flex justify-center">
          <SearchBar queryPart={queryPart} />
        </div>

        {!queryPart && <LandingPart />}
        {queryPart && !movieList?.length && !isLoading && (
          <div className="h-[calc(100%-25%)] pb-8 py-auto text-gray-300 text-center flex flex-col justify-center flex-1">
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
                <div
                  key={imdbID}
                  onClick={() =>
                    navigate(
                      `/?title=${imdbID}&query=${queryPart}&page=${pageNumber}`
                    )
                  }
                >
                  <MovieCard poster={Poster} title={Title} imdbID={imdbID} />
                </div>
              );
            })}
          </section>
        </div>

        <Pagination
          totalPages={totalPages}
          queryPart={queryPart}
          pageNumber={pageNumber}
        />
      </main>
    </>
  );
}

export default HomePage;
