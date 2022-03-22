import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../Context/ThemeContext";

export const Navbar = () => {
const{setSearchTerm}=useContext(Context)

  // active link
  useEffect(() => {
    const activeLink = () => {
      let links = document.querySelectorAll(".link");

      links.forEach((link) => {
        link.addEventListener("click", () => {
          link.classList.add("active");
        });
      });
    };
    activeLink();
  }, []);

  const darkThemeToggler = () => {
    let darkBtn = document.querySelector(".darkBtn");
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("active");
    });
  };

  useEffect(() => {
    darkThemeToggler();
  }, []);

  // search feature
  useEffect(() => {
    const searchTrigger = () => {
      const searchBtn = document.querySelector(".searchBtn");
      const searchInput = document.querySelector(".searchInput");

      searchBtn.addEventListener("click", () => {
        searchInput.classList.toggle("active");
      });
    };
    searchTrigger();
  },[]);

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="left">
          <p className="logo">MoviesHub</p>
          <Link to="/">
            <p className="link "> TopRated</p>
          </Link>
          <Link to="/trendings">
            <p className="link">Trendings</p>
          </Link>
          <Link to="/popular">
            <p className="link">Popular</p>
          </Link>
          <Link to="/actions">
            <p className="link">Actions</p>
          </Link>
          <div className="search">
            <p className="searchBtn">Search</p>
            <input className="searchInput" type="text" placeholder="search by name" onChange={(e)=>setSearchTerm(e.target.value)}/>
          </div>
        </div>
        <div className="right">
          <p id="darkBtn" className="darkBtn">
            DarkMode
          </p>
        </div>
        {/* <div className="hamburgerMenu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
      </div>
    </div>
  );
};
