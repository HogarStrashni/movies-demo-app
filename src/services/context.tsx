import { useContext, useState, createContext } from "react";

const LocalStorageContext = createContext({});

const LocalStorageProvider = ({ children }: any) => {
  const [myLocalStorage, setMyLocalStorage] = useState([]);

  return (
    <LocalStorageContext.Provider value={{ myLocalStorage, setMyLocalStorage }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Create custom hook
const useLocalStorage = () => {
  return useContext(LocalStorageContext);
};

export { LocalStorageProvider, useLocalStorage };
