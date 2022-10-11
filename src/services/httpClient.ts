import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const getMovies = (query: string | number, page: string | number) => {
  return axiosInstance.get("/", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      type: "movie",
      s: query,
      page: page,
    },
  });
};

export const getMovieByID = (id: string) => {
  return axiosInstance.get("/", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      type: "movie",
      i: id,
    },
  });
};
