import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Landing from "./pages/Landing";
import Movie from "./pages/Movie";
import axios from "axios";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Catch from "./components/Catch";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const STORAGE_KEY = "mySearchedMovies";

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setMovies(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    }
  }, [movies]);

  function handleSubmit(event, navigate) {
    event.preventDefault();

    const searchBar = document.querySelector(".search-bar");
    const search = searchBar.value;

    navigate(`/search/${search}`);
  }

  async function renderMovies(search) {
    // loading state initiated
    // spinner.classList += " loading";
    // container.classList += " move-forward";
    // movieList.style.opacity = 0;
    // header.style.visibility = "hidden";
    // scrollBarFloatUp();
    // background.style.display = "none";
    // specify.innerHTML = ``
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=806b3177`,
      );

      if (data.Response === "False") {
        setMovies([])
        setError(true)
        return;
      }
      
      const firstSix = data.Search.slice(0, 6);
      setMovies(firstSix);
      setError(false)
    } catch (error) {
      console.log(error)
      setMovies([])
      setError(true)
    }

    //   movieArray = [];

    //   calculateRuntimes(firstSix);
    //   reformatReleaseDates(firstSix);
  }

  // add movieArray to moviesHTML()

  return (
    <Router>
      <Nav handleSubmit={handleSubmit} />
      <Routes>
        <Route path="/" element={<Landing handleSubmit={handleSubmit} />} />
        <Route
          path="search/:s?"
          element={
            <Search
              handleSubmit={handleSubmit}
              movies={movies}
              setMovies={setMovies}
              loading={loading}
              setLoading={setLoading}
              renderMovies={renderMovies}
              error={error}
              setError={setError}
            />
          }
        />
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
