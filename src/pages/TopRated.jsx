import gsap from 'gsap';
import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Context } from '../Context/ThemeContext';
import "../styles/home.css";




const imageLink = "https://image.tmdb.org/t/p/original";



function Home() {
  const {handleMovieData}=useContext(Context)
  const[movies,setMovies]=useState([]);

useEffect(()=>{
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US").then((res)=>res.json()).then(data=>setMovies(data.results)).catch(e=>console.log(e))
},[]);

// useEffect(() => {
//   gsap.from((".logo"), { x:12,scale:.1,stagger:.4});
// },[]);
useEffect(()=>{
gsap.from(".poster",{
  opacity:0,
  // stagger:.4,
 transition:.1,
})
},[])


return (
    <>
    <Navbar/>
    <div className="posters">
      <div className="posterContainer">
        {movies.map(movie=> <div key={movie.id} className="poster">
            <img src={imageLink+movie.poster_path} alt="poster" />
            <p onClick={()=>handleMovieData(movie)} className='movieName'>{movie.original_title||movie.title}</p>
          </div>)}
         
      </div>
    </div>
    </>
  )
}

export default Home;