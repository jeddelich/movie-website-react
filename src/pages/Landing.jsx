import "./Landing.css";
import landing from "../assets/landing__img.svg";
import SearchBar from "../components/SearchBar";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Landing({ handleSubmit }) {
  return (
    <>
      <section id="landing">
        <div className="container">
          <div className="row">
            <figure className="landing__img--wrapper">
              <div className="landing__welcome">Browse our collection of hundreds of award-winning movies!</div>
              <img
                src={landing}
                className="landing__img"
                alt="picture of a movie actor and movie actress"
              />
            </figure>
            <SearchBar handleSubmit={handleSubmit} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
