import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Search.css";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Search({ handleSubmit, movies, loading, setLoading, renderMovies }) {
  const { s } = useParams();

  useEffect(() => {
    console.log(s);
    async function load() {
      setLoading(true);
      console.log("loading...")
      await renderMovies(s)
      setLoading(false)
    }
    load()
  }, [s]);

  return (
    <>
        {loading ? (
          <Loading />
        ) : (
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
        )}
    </>
  );
}

export default Search;
