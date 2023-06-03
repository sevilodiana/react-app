import {useEffect, useLayoutEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';

//435facab

const API_URL = 'http://www.omdbapi.com?apikey=435facab'

const movie1 = {
  "Title": "Shrek the Third",
  "Year": "2007",
  "imdbID": "tt0413267",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
      searchMovies('Shrek');
    }, []);

    return (
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search"> 
          <input 
            placeholder="Search for movies"
            value="Superman"
            onChange={() => {}}
          />
          <img 
            src={SearchIcon}
            alt="search"
            onClick={()=>{}}
          />
        </div>

      <div className="container">
        <div className="movie">
            <div>
              <p>{movie1.Year}</p>
            </div>

            <div>
             <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>

            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div> 
          </div>
        </div>
      </div>
    );
}

export default App;