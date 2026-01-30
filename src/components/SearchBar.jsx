import './SearchBar.css'
import { useLocation, useNavigate} from 'react-router-dom';

function SearchBar( {handleSubmit} ) {

const navigate = useNavigate()
const location = useLocation();

const resultsFor = location.pathname.startsWith("/search")
  ? location.pathname.split("/")[2]
  : null;

const isSearchPage = location.pathname.startsWith("/search");

    return (
      <form className={`search__form ${isSearchPage && "search__form2"}`} onSubmit={(event) => handleSubmit(event, navigate)}>
      <div className={`search-bar--wrapper ${isSearchPage && "search-bar--wrapper2"}`}>
        <input
          type="text"
          className={`search-bar ${isSearchPage && "search-bar2"}`}
          autoComplete="off"
          placeholder={`${isSearchPage ? resultsFor : 'Search movies...' }`}
        />
        <button type="submit" className="search-bar__form--btn">
          Search
        </button>
      </div>
      </form>
  );
}

export default SearchBar;
