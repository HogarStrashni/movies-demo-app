import axios from "axios";
import { useEffect } from "react";

const BASE_URL: string = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&s=batman`;

function App() {
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => console.log(response.data.Search))
      .catch((error) => console.log(error.message));
  }, []);

  return <main className="bg-gray-400">HelloWorld</main>;
}

export default App;
