import { useEffect } from 'react';
import './SearchBar.css'
import { useNavigate } from 'react-router-dom';

function SearchBar( {handleSubmit, s} ) {

const navigate = useNavigate()

useEffect(() => {
    if (s) {

        document.getElementById("search-bar").style.opacity=1;
        document.getElementById("search-bar").style.width="40vw"
        document.getElementById("search__form").style.width="100%"
        document.getElementById("search__form").style.margin="0"
    }
}, [])

    return (
    <form id="search__form" onSubmit={(event) => handleSubmit(event, navigate)}>
      <div className="search-bar--scale-wrapper">
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
