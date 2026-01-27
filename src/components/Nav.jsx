import "./Nav.css";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function Nav({ s, handleSubmit }) {
  const navigate = useNavigate();

  function originalLinks() {
    navigate("/");

    // opposite of potential util function in app.js
    const navLinks = document.querySelectorAll(".nav__link--1");
    navLinks[0].style.display = "flex";
    navLinks[1].style.display = "flex";
    const navLinkHome = document.querySelector(".nav__link--2");
    navLinkHome.style.display = "none";
  }

  return (
    <nav>
      {s && (
        <div className="search--placeholder">
          <SearchBar s={s} handleSubmit={handleSubmit}/>
        </div>
      )}
      <div className="nav__side--left">
        <figure className="logo--wrapper">
          <img src={Logo} alt="" className="logo" />
        </figure>
      </div>
      <div className="nav__side--right">
        <ul className="nav__links">
          <li className="nav__link nav__link--2">
            <a
              className="nav__link--anchor nav__link--anchor2"
              onClick={originalLinks}
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
          <li className="nav__link nav__link--1">
            <a className="nav__link--anchor">About</a>
            <div className="underline"></div>
          </li>
          <li className="nav__link nav__link--1">
            <a className="nav__link--anchor">Contact</a>
            <div className="underline"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
