import { useEffect } from "react";
import "./Search.css";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Catch from "../components/Catch";
import MovieCard from "../components/MovieCard";

function Search({
  movies,
  setMovies,
  loading,
  setLoading,
  renderMovies,
  error,
  setError
}) {
  const { s } = useParams();

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
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      )}
    </>
  );
}

export default Search;
