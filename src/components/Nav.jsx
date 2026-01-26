import './Nav.css'

function Nav() {
  return (
    <nav>
      <div class="nav__side--left">
        <div class="nav__title">Movies</div>
        <div class="movies__icon--wrapper">
          <i class="movies__icon fa-solid fa-film"></i>
        </div>
      </div>
      <div class="nav__side--right">
        <ul class="nav__links">
          <li class="nav__link nav__link--2">
            <a
              class="nav__link--anchor nav__link--anchor2"
              onclick="window.location.reload();"
            >
              Go Home
            </a>
            <div class="underline"></div>
            <i
              class="fa-solid fa-arrow-right-to-bracket"
              onclick="window.location.reload();"
            ></i>
          </li>
          <li class="nav__link nav__link--1">
            <a class="nav__link--anchor">About</a>
            <div class="underline"></div>
          </li>
          <li class="nav__link nav__link--1">
            <a class="nav__link--anchor">Contact</a>
            <div class="underline"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
