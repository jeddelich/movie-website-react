import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, posterOnly = false }) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const showFallback = imgError || !movie.Poster || movie.Poster === "N/A";

  return (
    <div className="movie">
      <div className="movie__poster--wrapper">
        {showFallback ? (
          <div
            className="movie__poster--unavailable"
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
          >
            Picture
            <br />
            Currently
            <br />
            Unavailable
          </div>
        ) : (
          <img
            src={movie.Poster}
            className="movie__poster"
            alt={movie.Title}
            onError={() => setImgError(true)}
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
          />
        )}
      </div>

      {!posterOnly && (
        <div className="movie__description">
          <div className="movie__title">{movie.Title}</div>
          <div className="movie__details">
            <div className="movie__year">{movie.Year}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
