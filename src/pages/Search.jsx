import Nav from "../components/Nav";
import "./Search.css";
import { useParams } from "react-router-dom";

function Search() {
  
const {s} = useParams()
console.log(s)  

    return (
    <>
      <Nav s={s}/>
      <div className="movie__list"></div>
    </>
  );
}

export default Search;
