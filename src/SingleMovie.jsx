import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }


  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text"><b>Release Date :</b> {movie.Released}</p>
          <p className="card-text"><b>Genre : </b>{movie.Genre}</p>
          <p className="card-text"><b>IMDB : </b> {movie.imdbRating} / 10</p>
          <p className="card-text"><b>Country : </b>{movie.Country}</p>
          <p>
                <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
            {/* <a href="https://cinesubz.co/?s=avengers" className="back-btn">Download</a> */}
            <NavLink to="movie/download" className="back-btn">
              Download
           </NavLink>
          </p>
        
          
          
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;