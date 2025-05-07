import React,{ useState ,useEffect } from 'react';
import MovieCard from './MovieCard.jsx';
import './App.css';
import SearchIcon from './search.svg';
//66cbcaa2

const API_URL = 'http://www.omdbapi.com?apikey=66cbcaa2';

const App=()=> {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  
  useEffect(()=> {
    searchMovies('Superman');
  },[]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  return (
    < >
      <div className="app">
        <h1>Movies Paradise</h1>
        <div className="search">
            <input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            <img src={SearchIcon} alt="search" onClick={()=> searchMovies(searchTerm)} />
        </div>
        {movies?.length > 0 ?(
        <div className='container'>
         {movies.map((movie)=>(
            <MovieCard movie={movie} />
         ))}
        </div>
        ):(
          <div className='empty'>
              <h2>No Movies Found</h2>
          </div>
      )}
      </div>
    </>
  )
}

export default App
