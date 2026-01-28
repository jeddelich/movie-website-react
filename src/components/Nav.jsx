import "./Nav.css";
import Logo from "../assets/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import { useState } from "react";

function Nav({ handleSubmit, s }) {
  const navigate = useNavigate();

const location = useLocation();
const isSearchPage = location.pathname.startsWith("/search");
const [aboutModal, setAboutModal] = useState(false)
const [contactModal, setContactModal] = useState(false)

function handleAboutModal() {
  aboutModal ? setAboutModal(false) : setAboutModal(true)
}

function handleContactModal() {
  contactModal ? setContactModal(false) : setContactModal(true)
}

  return (
    <>
    { 
    aboutModal && <Modal />
    }
    { 
    contactModal && <Modal />
    }
    <nav>
      <div className="nav__side--left">
        <figure className="logo--wrapper">
          <img src={Logo} alt="" className="logo" />
        </figure>
      </div>
      {isSearchPage && (
        <div className="search--placeholder">
          <SearchBar s={s} handleSubmit={handleSubmit} />
        </div>
      )}
      <div className="nav__side--right">
        <ul className="nav__links">
          {isSearchPage ? (
            <li className="nav__link nav__link--2">
              <a
                className="nav__link--anchor nav__link--anchor2"
                onClick={() => navigate("/")}
              >
                Return To Home Page
              </a>
              <div className="underline"></div>
              <figure className="home__icon--wrapper">
                <i
                  className="fa-solid fa-arrow-right-to-bracket"
                  //   onClick="window.location.reload();"
                ></i>
              </figure>
            </li>
          ) : (
            <>
              <li className="nav__link nav__link--1">
                <a className="nav__link--anchor" onClick={handleAboutModal}>About</a>
                <div className="underline"></div>
              </li>
              <li className="nav__link nav__link--1">
                <a className="nav__link--anchor" onClick={handleContactModal}>Contact</a>
                <div className="underline"></div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Nav;
