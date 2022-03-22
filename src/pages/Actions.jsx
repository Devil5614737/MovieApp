import gsap from "gsap";
import React, { useContext, useEffect, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Navbar } from "../components/Navbar";
import { Context } from "../Context/ThemeContext";
import "../styles/home.css";


const imageLink = "https://image.tmdb.org/t/p/original";
const t1=gsap.timeline()

function Actions() {
  const {searchResults,handleMovieData}=useContext(Context)
  const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&with_genres=28"
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setMovies(data.results)})
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    t1.from((".poster"), {
      opacity: 0,
      stagger: 0.2,
      delay: 0.1,
      ease: "power2.easeIn",
      scale: 0.1,
      y: 122,
    });
  }, []);


  return (
    <>
       <Navbar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="posters">
          <div className="posterContainer">
            {searchResults
              ? searchResults.map((movie) => (
                  <div key={movie.id} className="poster">
                    <img src={imageLink + movie.poster_path} alt="poster" />
                    <p
                      onClick={() => handleMovieData(movie)}
                      className="movieName"
                    >
                      {movie.original_title || movie.title}
                    </p>
                  </div>
                ))
              : movies.map((movie) => (
                  <div key={movie.id} className="poster">
                    <img src={imageLink + movie.poster_path} alt="poster" />
                    <p
                      onClick={() => handleMovieData(movie)}
                      className="movieName"
                    >
                      {movie.original_title || movie.title}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Actions;
