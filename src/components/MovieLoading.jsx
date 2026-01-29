import "./MovieLoading.css";

function MovieLoading() {
  return (
    <section id="movie__loading">
      <div className="movie__container">
        <div className="movie__row">
          <div className="movie">
            <div className="movie__poster--wrapper">
              <div className="movie__poster--unavailable">
                Picture
                <br />
                Currently
                <br />
                Unavailable
              </div>
            </div>

            <div className="movie__description">
              <div className="movie__title"></div>
              <div className="movie__details">
                <div className="movie__year"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieLoading;
