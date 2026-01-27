import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Search.css";
import { useParams } from "react-router-dom";

function Search({ handleSubmit, movies }) {
  const { s } = useParams();

  return (
    <>
      <Nav s={s} handleSubmit={handleSubmit} />
      <div className="movie__list">
        {movies.map((movie, i) => (
          <div className="movie" key={movie.imdbID}>
            <div className="movie__poster--wrapper">
              {movie.Poster === "N/A" ? (
                <div className="movie__poster--unavailable">
                  No Picture
                  <br />
                  In Database
                </div>
              ) : (
                <img src={movie.Poster} className="movie__poster" />
              )}
            </div>

            <div className="movie__description">
              <div className="movie__title">{movie.Title}</div>
              <div className="movie__details">
                <div className="movie__year">{movie.Year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;
