import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useEffect, useState } from 'react';

function MovieGrid() {
  const [movies, setMovies] = useState([]);

  const URL = 'https://api.andrespecht.dev/movies';

  useEffect(() => {
    async function getMovies() {
      try {
        const response = (await axios.get(URL)).data.response;
        setMovies(response);
        console.log(movies);
      } catch (error) {
        console.error(error);
      }
    }
  
    getMovies();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="grid-container">
        {movies.map(movie => (
          <Link to='' key={movie._id}>
          <div className="column">
            <div className="content-container flex">
              <figure>
                <img src={movie.poster} alt={movie.title} />
              </figure>
              <div className="content-text flex justify-between">
                <p>{movie.title}</p>
                <p>{movie.year}</p>
              </div>
            </div>
          </div>
        </Link>
        )
        )}
      </div>
    </>
  )
}

export default MovieGrid;