import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import LoadingStage from "../components/LoadingStage";

const BASE_URL: string = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&s=batman`;

function Search() {
  const [movieList, setMovieList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setMovieList(response.data.Search);
        setTotalPages(response.data.totalResults);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  }, []);

  console.log(movieList);
  console.log(totalPages);

  return (
    <>
      {isLoading && <LoadingStage />}

      <main className="bg-black bg-opacity-95 flex-1 overflow-auto">
        <div className="max-w-lg mx-auto pt-6 flex justify-center">
          <SearchBar />
        </div>
        <div className="flex justify-center">
          <section className="mx-auto mt-6 grid grid-cols-1 gap-4 justify-center content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movieList?.map((item) => {
              const { imdbID, Poster, Title } = item;
              return <MovieCard key={imdbID} poster={Poster} title={Title} />;
            })}
          </section>
        </div>
        <Pagination totalPages={totalPages} />
      </main>
    </>
  );
}

export default Search;
