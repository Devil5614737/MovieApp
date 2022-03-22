import TopRated from "./pages/TopRated";
import "./styles/global.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Trendings from "./pages/Trendings";
import Popular from "./pages/Popular";
import Actions from "./pages/Actions";
import { ThemeContext } from "./Context/ThemeContext";
import { Context } from "./Context/ThemeContext";
import { useEffect, useState } from "react";
import MovieInfo from "./pages/MovieInfo";

function App() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleMovieData = (movie) => {
    setMovieData(movie);
    navigate("/movieinfo");
  };
  

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=2edf9f02e088272f6ff2eab6bf5fa21a&with_genres=10749`
      )
        .then((res) => res.json())
        .then((data) => setSearchResults(data.results))
        .catch((e) => console.log(e));
    }
  },[searchTerm]);


  return (
    <Context.Provider
      value={{ movieData, setMovieData, handleMovieData, setSearchTerm ,searchResults}}
    >
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Routes>
          <Route path="/" element={<TopRated />} />
          <Route path="/trendings" element={<Trendings />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/movieinfo" element={<MovieInfo />} />
        </Routes>
      </ThemeContext.Provider>
    </Context.Provider>
  );
}

export default App;
