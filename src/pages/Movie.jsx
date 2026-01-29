import "./Movie.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Movie() {
  const { i } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  function formatRuntime(runtime) {
    const movieDataNumbers = runtime.replace(" min", "");

    if (Number(movieDataNumbers) > 119) {
      const hours = Math.floor(movieDataNumbers / 60);
      const minutes = movieDataNumbers % 60;
      const time = hours + " hrs " + minutes + " mins";
      console.log(time)
      return time;
    } else if (Number(movieDataNumbers) > 59) {
      const hours = Math.floor(movieDataNumbers / 60);
      const minutes = movieDataNumbers % 60;
      const time = hours + " hr " + minutes + " mins";
      console.log(time)
      return time;
    } else {
      const time = movieDataNumbers + " mins";
      console.log(time)
      return time;
    }
  }

  useEffect(() => {
    async function moreData() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${i}&apikey=806b3177`,
      );

      setMovie(data);
    }
    moreData();
  }, [i]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  if (!movie) {
    return <div>Loading movie...</div>;
  }

  return (
    <section id="movie">
      <div className="movie__container">
        <div className="movie__row">
          <figure className="movie__img--wrapper">
            {
              movie.Poster === "N/A" ? <div className="movie__unavailable--movie">Picture
                    <br />
                    Currently
                    <br />
                    Unvailable
                  </div> :
            <img className="movie__poster--img" src={movie.Poster} alt="" />
            }
          </figure>
          <div className="movie__info">
            <h1 className="movie__title--movie">{movie.Title}</h1>
            <div className="movie__subtitle">
              <div className="movie__rated"><span className="bold">Rated:</span> {movie.Rated}</div>
              <div className="movie__runtime">
                <span className="bold">Length:</span> {formatRuntime(movie.Runtime)}
              </div>
            </div>
            <p className="movie__plot">{movie.Plot}</p>
            <p className="movie__genre"> {movie.Genre}</p>
            <button
              className="movie__button--back"
              onClick={() => navigate(-1)}
            >
              Go Back To Search<i class="fa-solid fa-align-left"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
