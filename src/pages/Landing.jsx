import "./Landing.css";
import landing from "../assets/landing.svg";
import SearchBar from "../components/SearchBar";

function Landing() {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <figure className="landing__img--wrapper">
            <img
              src={landing}
              className="landing__img"
              alt="picture of a movie actor and movie actress"
            />
          </figure>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}

export default Landing;
