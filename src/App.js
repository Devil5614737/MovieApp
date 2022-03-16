import TopRated from './pages/TopRated'
import "./styles/global.css";
import {Routes,Route, useNavigate} from 'react-router-dom';
import Trendings from './pages/Trendings';
import Popular from './pages/Popular';
import Actions from './pages/Actions';
import {ThemeContext} from './Context/ThemeContext'
import {Context} from './Context/ThemeContext'
import { useState } from 'react';
import MovieInfo from './pages/MovieInfo';


function App() {
  const navigate=useNavigate()
const [darkMode,setDarkMode]=useState(false);
const[movieData,setMovieData]=useState([])


const handleMovieData=(movie)=>{
  setMovieData(movie);
  navigate('/movieinfo')
}



  return (
    <Context.Provider value={{movieData,setMovieData,handleMovieData}}>
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        <Routes>
          <Route path='/' element={<TopRated/>}/>
          <Route path='/trendings' element={<Trendings/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/actions' element={<Actions/>}/>
          <Route path='/movieinfo' element={<MovieInfo/>}/>
      
        </Routes>
      </ThemeContext.Provider>
    </Context.Provider>
  );
}

export default App;
