import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
 
  return (
      <>
          <div className="app"><h1>SinFlix</h1></div>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search for movies" className="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;