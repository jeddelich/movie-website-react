import Nav from "../components/Nav";
import "./Search.css";
import { useParams } from "react-router-dom";

function Search({handleSubmit}) {
  
const {s} = useParams()

    return (
    <>
      <Nav s={s} handleSubmit={handleSubmit}/>
      <div className="movie__list"></div>
    </>
  );
}

export default Search;
