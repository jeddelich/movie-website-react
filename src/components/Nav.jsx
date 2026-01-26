import './Nav.css'

function Nav() {
  return (
    <nav>
      <div className="nav__side--left">
        <div className="nav__title">Movies</div>
        <div className="movies__icon--wrapper">
          <i className="movies__icon fa-solid fa-film"></i>
        </div>
      </div>
      <div className="nav__side--right">
        <ul className="nav__links">
          <li className="nav__link nav__link--2">
            <a
              className="nav__link--anchor nav__link--anchor2"
            //   onClick="window.location.reload();"
            >
              Go Home
            </a>
            <div className="underline"></div>
            <i
              className="fa-solid fa-arrow-right-to-bracket"
            //   onClick="window.location.reload();"
            ></i>
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
