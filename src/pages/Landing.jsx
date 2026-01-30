import "./Landing.css";
import landing from "../assets/landing__img.svg";
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";

function Landing({
  handleSubmit,
  aboutModal,
  setAboutModal,
  contactModal,
  setContactModal,
  menuStatus,
  setMenuStatus
}) {
  return (
      <section id="landing">
        <div className="container">
          {
          menuStatus && <Menu setMenuStatus={setMenuStatus} setAboutModal={setAboutModal} setContactModal={setContactModal}/>
          }
          {!contactModal && !aboutModal && (
            <div className="row">
              <figure className="landing__img--wrapper">
                <div className="landing__welcome">
                  Browse our collection of hundreds of award-winning movies!
                </div>
                <img
                  src={landing}
                  className="landing__img"
                  alt="a movie actor and movie actress"
                />
              </figure>
              <SearchBar handleSubmit={handleSubmit} />
            </div>
          )}
        </div>
      </section>
  );
}

export default Landing;
