import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Search.css";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Catch from "../components/Catch";

function Search({
  handleSubmit,
  movies,
  setMovies,
  loading,
  setLoading,
  renderMovies,
  error,
  setError,
}) {
  const { s } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    if (!s) return;

    setError(false)
    setMovies([])
    setLoading(true);
    async function load() {
      const minDelay = 1000; // 2 seconds
      const startTime = Date.now();

      await renderMovies(s);

      const elapsed = Date.now() - startTime;
      const remainingTime = minDelay - elapsed;

      if (remainingTime > 0) {
        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
      } else {
        setLoading(false);
      }
    }

    load();
  }, [s]);

  // if (!s || error) {
  //   return <Catch />
  // }

  return (
    <>
      {loading ? (
        <Loading />
      ) : !s ? (
        <Catch />
      ) : error || movies.length === 0 ? (
        <Catch />
      ) : (
        <div className="movie__list">
          {movies.map((movie, i) => (
            <div className="movie" key={movie.imdbID}>
              <div className="movie__poster--wrapper">
                {movie.Poster === "N/A" ? (
                  <div className="movie__poster--unavailable"  onClick={() => navigate(`/movie/${movie.imdbID}`)}>
                    Picture
                    <br />
                    Currently
                    <br />
                    Unvailable
                  </div>
                ) : (
                  <img src={movie.Poster} className="movie__poster" onClick={() => navigate(`/movie/${movie.imdbID}`)} />
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
