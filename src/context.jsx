import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */

// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Avengers");
    const { isLoading, isError, movie } = useFetch(`&s=${query}`);
    
//   const AppProvider = ({children}) => {
//   const [searchTerm, setSearchTerm] = useState("batman");
//   const [movies, setMovies] = useState([]);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };