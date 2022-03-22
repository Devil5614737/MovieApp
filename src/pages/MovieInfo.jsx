import React, { useContext, useEffect } from "react";
import "../styles/movieinfo.css";
import { Navbar } from "../components/Navbar";
import { Context } from "../Context/ThemeContext";
import gsap from "gsap";

function MovieInfo() {
  const { movieData } = useContext(Context);

  const imageLink = "https://image.tmdb.org/t/p/original";

  if (movieData.length === 0) {
    window.location = "/";
  }


  let t1=gsap.timeline()
  //
  useEffect(() => {
    t1.from(".movieThumbnail", {
      opacity: 0,
      stagger: 0.4,
      scale: 0.1,
      y: 12,
      //  transition:.1
    });
    t1.from(".movieName", {
      opacity: 0,
      stagger: 0.4,
      y: 12,
      scale: 0.1,
      dealy:.5,
      //  transition:.1
    });
    t1.from(".movieStats", {
      opacity: 0,
      stagger: 0.7,
      x: 12,
      dealy:.7,
      //  transition:.1
    });
    t1.from(".movieAbout", {
      opacity: 0,
      stagger: 0.5,
      y: -12,
      scale: 3,
      dealy:.9,

    });
    
  
  }, []);
  return (
    <>
      <Navbar />
      <div className="movieInfo">
        <div className="movieInfoContainer">
          <div className="movieThumbnail">
            <img src={imageLink + movieData.backdrop_path} alt="movie" />
          </div>
          <div className="movieDetails">
            <p className="movieName">
              {movieData.original_title || movieData.title}
            </p>
            <div className="movieStats">
              <p>Release Date :{movieData.release_date}</p>
              <p>Ratings :<span>{movieData.vote_average}</span></p>
            </div>
            <p className="movieAbout">{movieData.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
