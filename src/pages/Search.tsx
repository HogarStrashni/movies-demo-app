import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const BASE_URL: string = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&s=batman`;

function Search() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => setMovieList(response.data.Search))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(movieList);

  return (
    <main className="min-h-[calc(100vh-204px)] sm:min-h-[calc(100vh-212px)] bg-black bg-opacity-95 relative overflow-auto">
      <div className="max-w-lg mx-auto pt-6 flex justify-center">
        <SearchBar />
      </div>
      <div className="flex justify-center">
        <section className="mx-auto mt-6 grid grid-cols-1 gap-4 justify-center content-center absolute overflow-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movieList?.map((item) => {
            const { imdbID, Poster, Title } = item;
            return <MovieCard key={imdbID} poster={Poster} title={Title} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Search;
