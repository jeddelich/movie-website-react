import "./MovieLoading.css";

function MovieLoading() {
  return (
    <section id="movie__loading">
      <div className="movie__container">
        <div className="movie__row">
          <div className="movie">
            <i class="fa-solid fa-spinner"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieLoading;
