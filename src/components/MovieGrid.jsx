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
      } catch (error) {
        console.error(error);
      }
    }
  
    getMovies();
  }, []); // Empty dependency array means this effect runs once on mount

  const sortByTitle = () => {
      const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
      setMovies(sortedMovies);
  };

  const sortByYear = () => {
    const sortedMovies = [...movies].sort((a, b) => a.year - b.year);
    setMovies(sortedMovies)
  };

  return (
    <>
      <div className="sorting-container flex gap-10">
        <h2>Sort:</h2>
        <button className="sort-btn title-btn center" onClick={sortByTitle}>By title</button>
        <button className="sort-btn year-btn center" onClick={sortByYear}>By year</button>
      </div>
      <div className="grid-container">
        {movies.map(movie => (
          <Link to={`/movie/${movie.slug}`} key={movie._id}>
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