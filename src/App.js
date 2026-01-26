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

  console.log(search)

  navigate('/search')
}

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing handleSubmit={handleSubmit}/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
