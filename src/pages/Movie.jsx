import "./Movie.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie({ detailedMovies }) {
  const { i } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const found = detailedMovies.find((object) => object.imdbID === i);
    setMovie(found);
  }, []);

  return (
  <section id="movie">
    <div className="container">
      <div className="row">
        <figure className="movie__poster--wrapper">
          <img className="movie__poster--img" src="" alt="" />
        </figure>
        <div className="movie__details">
          <h1 className="movie__title"></h1>
          <div className="movie__subtitle">
            <div className="movie__rated"></div>
            <div className="movie__runtime"></div>
          </div>
          <p className="movie__plot"></p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Movie;
