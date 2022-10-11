import { useContext, useState, createContext, useEffect } from "react";
import localStorageLogic from "../utils/localStorageLogic";

const MyMoviesContext = createContext({});

export const MyMoviesProvider = ({ children }: any) => {
  const initialState = localStorageLogic.get("myMovieList") || [];
  const [myMovies, setMyMovies] = useState(initialState);

  useEffect(() => {
    localStorageLogic.set("myMovieList", myMovies);
  }, [myMovies]);

  const myMovieIDs = new Set(myMovies.map((item: any) => item.imdbID));

  return (
    <MyMoviesContext.Provider value={{ myMovies, setMyMovies, myMovieIDs }}>
      {children}
    </MyMoviesContext.Provider>
  );
};

// Custom hook
export const useMyMoviesData = () => {
  return useContext(MyMoviesContext);
};
