import { useEffect } from 'react';
import './SearchBar.css'
import { useNavigate } from 'react-router-dom';

function SearchBar( {handleSubmit, s} ) {

const navigate = useNavigate()

useEffect(() => {
    if (s) {
        const searchBar = document.getElementById("search-bar")
        const searchForm = document.getElementById("search__form")
        const searchBarWrapper = document.querySelector(".search-bar--wrapper")

        searchBar.style.width="40vw"
        searchBar.setAttribute("placeholder", `${s}`)
        searchBarWrapper.classList += " search-bar--wrapper2"
        searchForm.style.animation = "fade-in 2s 1s ease forwards"
        searchForm.style.transform = "translateX(0)"
        searchForm.style.width="100%"
        searchForm.style.margin="0"
    }
}, [])

    return (
    <form id="search__form" onSubmit={(event) => handleSubmit(event, navigate)}>
      <div className="search-bar--wrapper">
        <input
          type="text"
          id="search-bar"
          autoComplete="off"
          placeholder="Search movies..."
        />
        <button type="submit" className="search-bar__form--btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
