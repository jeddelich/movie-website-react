import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Landing from './pages/Landing';
import Movie from './pages/Movie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:id' element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
