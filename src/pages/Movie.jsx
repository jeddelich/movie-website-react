import "./Movie.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Movie() {
  const { i } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate()

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
            <img className="movie__poster--img" src={movie.Poster} alt="" />
          </figure>
          <div className="movie__info">
            <h1 className="movie__title--movie">{movie.Title}</h1>
            <div className="movie__subtitle">
              <div className="movie__rated">Rated: {movie.Rated}</div>
              <div className="movie__runtime">Length: {movie.Runtime}</div>
            </div>
            <p className="movie__plot">{movie.Plot}</p>
            <p className="movie__genre"> {movie.Genre}</p>
            <button className="movie__button--back" onClick={() => navigate(-1)}>
              Go Back To Search<i class="fa-solid fa-align-left"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
