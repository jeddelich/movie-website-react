import "./Nav.css";
import Logo from "../assets/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import { useEffect } from "react";

function Nav({
  handleSubmit,
  s,
  aboutModal,
  setAboutModal,
  contactModal,
  setContactModal,
  setMenuStatus,
}) {
  const navigate = useNavigate();

  const location = useLocation();
  const isSearchPage = location.pathname.startsWith("/search");
  const isMoviePage = location.pathname.startsWith("/movie");

  useEffect(() => {
    setAboutModal(false);
    setContactModal(false);
  }, [location.pathname, setAboutModal, setContactModal]);

  function handleAboutModal() {
    if (contactModal) {
      setContactModal(false);
      setAboutModal(true);
    } else {
      aboutModal ? setAboutModal(false) : setAboutModal(true);
    }
  }

  function handleContactModal() {
    if (aboutModal) {
      setAboutModal(false);
      setContactModal(true);
    } else {
      contactModal ? setContactModal(false) : setContactModal(true);
    }
  }

  function openMenu() {
    if (aboutModal) {
      setAboutModal(false);
    } else if (contactModal) {
      setContactModal(false);
    }
    setMenuStatus(true);
  }

  return (
    <>
      {aboutModal && (
        <div className="modal__about">
          <Modal
            modalTitle="Your Next Movie Is Our Mission"
            modalPara="Whether it's for your next family movie night, a romantic date, or to discover your next binge-worthy TV series, Cinemations is here to help! With our vast database of
            movies and TV shows, we guarantee you'll find all the info you need to pick your next hit movie!"
            modalClose={handleAboutModal}
            contactModal={contactModal}
            aboutModal={aboutModal}
          />
        </div>
      )}
      {contactModal && (
        <div className="modal__contact">
          <Modal
            modalTitle="Can't Find Your Movie Anywhere?"
            modalPara="We do our best to keep our library updated, but we need your help! Please contact us and let us know what we're missing!"
            modalClose={handleContactModal}
            contactModal={contactModal}
            aboutModal={aboutModal}
          />
        </div>
      )}
      <nav>
        {!isSearchPage ? (
          <div className="nav__side--left">
            <figure className="logo--wrapper">
              <img src={Logo} alt="" className="logo" />
            </figure>
          </div>
        ) : (
          <div className="search-nav__side--left">
            <div className="nav__side--left">
              <figure className="logo--wrapper">
                <img src={Logo} alt="" className="logo" />
              </figure>
            </div>
          </div>
        )}
        {isSearchPage && (
          <div className="search--placeholder">
            <SearchBar s={s} handleSubmit={handleSubmit} />
          </div>
        )}
        <div className="nav__side--right">
          <ul className="nav__links">
            {isSearchPage || isMoviePage ? (
              <li className="nav__link nav__link--2">
                {isMoviePage ? (
                  <div className="movie-nav__link--anchor2">
                    {" "}
                    <button
                      className="nav__link--anchor nav__link--anchor2"
                      onClick={() => navigate("/")}
                    >
                      Return To Home Page
                    </button>
                  </div>
                ) : (
                  <div className="search-nav__link--anchor2">
                    {" "}
                    <button
                      className="nav__link--anchor nav__link--anchor2"
                      onClick={() => navigate("/")}
                    >
                      Return To Home Page
                    </button>
                  </div>
                )}

                <div className="underline"></div>
                {isSearchPage ? (
                  <div className="search-home__icon--wrapper">
                    <button onClick={() => navigate("/")}>
                      <figure className="home__icon--wrapper">
                        <i
                          className="fa-solid fa-arrow-right-to-bracket"
                          //   onClick="window.location.reload();"
                        ></i>
                      </figure>
                    </button>
                  </div>
                ) : (
                  <button onClick={() => navigate("/")}>
                    <figure className="home__icon--wrapper">
                      <i
                        className="fa-solid fa-arrow-right-to-bracket"
                        //   onClick="window.location.reload();"
                      ></i>
                    </figure>
                  </button>
                )}
              </li>
            ) : (
              <>
                <li className="nav__link nav__link--1">
                  <button className="nav__link--anchor" onClick={handleAboutModal}>
                    About
                  </button>
                  <div className="underline"></div>
                </li>
                <li className="nav__link nav__link--1">
                  <button className="nav__link--anchor" onClick={handleContactModal}>
                    Contact
                  </button>
                  <div className="underline"></div>
                </li>
                <button className="menu__icon--wrapper" onClick={openMenu}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
