import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Landing from "./pages/Landing";
import Movie from "./pages/Movie";
import Nav from "./components/Nav";

function App() {

function handleSubmit(event, navigate) {
  event.preventDefault();

  const searchBar = document.getElementById("search-bar");
  const search = searchBar.value

  navigate(`/${search}`)
  renderMovies(search)
}

async function renderMovies(search) {
  // loading state initiated
  // spinner.classList += " loading";
  // container.classList += " move-forward";
  // movieList.style.opacity = 0;
  // header.style.visibility = "hidden";
  // scrollBarFloatUp();
  // background.style.display = "none";
  // navLinks[0].style.display = "none";
  // navLinks[1].style.display = "none";
  // specify.innerHTML = ``

  // try {
    const moviesPromise = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=806b3177`
    );
    const moviesData = await moviesPromise.json();
    const firstSix = moviesData.Search.splice(0, 6);

    console.log(firstSix)

  //   movieArray = [];

  //   calculateRuntimes(firstSix);
  //   reformatReleaseDates(firstSix);

    setTimeout(() => {
      moviesHTML(firstSix);
    }, 1000);
  }

// add movieArray to moviesHTML()

  // catch {
  //   spinner.classList.remove("loading");
  //   specify.innerHTML = `The movie you're searching for can't be found. 
  //   Please specify and try again! For continued support contact us.`
  // }


function moviesHTML(firstSix, movieArray) {
  // spinner.classList.remove("loading");
  // container.classList.remove("move-forward");
  // movieList.style.opacity = 1;

const movieList = document.querySelector(".movie__list");

  movieList.innerHTML = null;

// ${movieArray[i]} goes in movie__rated

  for (let i = 0; i < firstSix.length; i++) {
    if (firstSix[i].Poster === "N/A") {
      movieList.innerHTML += `<div class="movie">
                <div class="movie__poster--wrapper">
                    <div class="movie__poster--unavailable">No Picture<br>In Database
                        <i class="fa-solid fa-face-sad-cry"></i>
                    </div>
                </div>
                <div class="movie__description">
                    <div class="movie__title movie__title--${i}">${firstSix[i].Title}</div>
                    <div class="movie__details">
                        <div class="movie__year">${firstSix[i].Year}</div>
                        <div class="movie__rated"></div>
                    </div>
                </div>
            </div>`;
    } else {
      movieList.innerHTML += `<div class="movie">
                <div class="movie__poster--wrapper">
                    <img src="${firstSix[i].Poster}" class="movie__poster">
                </div>
                <div class="movie__description">
                    <div class="movie__title movie__title--${i}">${firstSix[i].Title}</div>
                    <div class="movie__details">
                        <div class="movie__year">${firstSix[i].Year}</div>
                        <div class="movie__rated"></div>
                    </div>
                </div>
            </div>`;
    }
  }
}

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing handleSubmit={handleSubmit}/>} />
        <Route path="/:s" element={<Search />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
