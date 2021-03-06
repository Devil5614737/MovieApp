import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../Context/ThemeContext";

export const Navbar = () => {
  const {searchTerm, setSearchTerm } = useContext(Context);


  const darkThemeToggler = () => {
    let darkBtn = document.querySelector(".darkBtn");
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("active");
    });
  };

  useEffect(() => {
    darkThemeToggler();
  }, []);
  const darkThemeToggler2 = () => {
    let darkBtn = document.getElementById("darkBtn2");
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("active");
    });
  };

  useEffect(() => {
    darkThemeToggler2();
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
  }, []);

  // hamburger toggel functionality
  useEffect(() => {
    function togglingNavbar() {
      let hamburgerBtn = document.querySelector(".hamburger");
      let mobileNav = document.querySelector(".mobileNav");
      hamburgerBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
      });
    }
    togglingNavbar();
  }, []);


  const handleSearch=e=>{
    
    setSearchTerm(e.target.value)
    
  }


  function debounce( callback, delay ) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    }
}

debounce(handleSearch,2000)



  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="leftContent">
          <Link to='/'>
            <p className="logo">MoviesHub</p>
          </Link>
          <div className="linksContainer">
            <Link className="link" to="/">
              <p>TopRated</p>
            </Link>
            <Link className="link" to="/trendings">
              <p>Trendings</p>
            </Link>
            <Link className="link" to="/popular">
              <p>Popular</p>
            </Link>
            <Link className="link" to="/actions">
              <p>Actions</p>
            </Link>
            <div className="search">
              <p className="searchBtn">Search</p>
              <input
                className="searchInput"
                type="text"
                placeholder="search by name"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="hamburger">
            <div className="Line"></div>
            <div className="Line"></div>
            <div className="Line"></div>
          </div>
        </div>
        <div className="rightContent">
          <p id="darkBtn" className="darkBtn">
            DarkMode
          </p>
        </div>
      </div>
      <div className="mobileNav">
      <Link className="link" to="/">
              <p>TopRated</p>
            </Link>
            <Link className="link" to="/trendings">
              <p>Trendings</p>
            </Link>
            <Link className="link" to="/popular">
              <p>Popular</p>
            </Link>
            <Link className="link" to="/actions">
              <p>Actions</p>
            </Link>
        <div className="search">
          <p className="searchBtn">Search</p>
          <input
            className="searchInput"
            type="text"
            placeholder="search by name"
            onChange={handleSearch}
          />
        </div>
        <p id="darkBtn2" className="darkBtn">
          DarkMode
        </p>
      </div>
    </div>
  );
};
