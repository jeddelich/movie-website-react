import './SearchBar.css'

function SearchBar() {
  return (
    <form id="search__form">
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
