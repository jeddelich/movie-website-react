import "./Loading.css";

function Loading() {
    const skeletonArray = [...Array(6)];

  return (
    <section id="loading">
      {skeletonArray.map((skeleton, i) => (
        <div className="loading__movie" key={i}>
          <div className="skeleton--wrapper">
            <div className="skeleton__poster">
            </div>
          </div>
          <div className="movie__description">
            <div className="skeleton__title"></div>
            <div className="movie__details">
              <div className="skeleton__year"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Loading;
