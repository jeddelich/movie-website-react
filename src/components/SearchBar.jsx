import './SearchBar.css'
import { useNavigate } from 'react-router-dom';

function SearchBar( {handleSubmit} ) {

const navigate = useNavigate()

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
