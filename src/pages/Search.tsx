import axios from "axios";
import { useEffect } from "react";

const BASE_URL: string = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&s=batman`;

function Search() {
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => console.log(response.data.Search))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <main className="h-[calc(100vh-204px)] sm:h-[calc(100vh-212px)] bg-black bg-movieBGP bg-no-repeat bg-center flex justify-center items-center">
      <div className="text-white text-3xl">SEARCH</div>
    </main>
  );
}

export default Search;
