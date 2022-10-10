import { useContext, useState, createContext, useEffect } from "react";
import localStorageLogic from "./localStorageLogic";

const LocalStorageContext = createContext({});

export const LocalStorageProvider = ({ children }: any) => {
  const initialState = localStorageLogic.get("myMovieList") || [];
  const [myMovies, setMyMovies] = useState(initialState);

  useEffect(() => {
    localStorageLogic.set("myMovieList", myMovies);
  }, [myMovies]);

  const myMovieIDs = new Set(myMovies.map((item: any) => item.imdbID));

  return (
    <LocalStorageContext.Provider value={{ myMovies, setMyMovies, myMovieIDs }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Custom hook
export const useMyMoviesData = () => {
  return useContext(LocalStorageContext);
};
