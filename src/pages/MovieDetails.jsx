import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import { FaPlay } from 'react-icons/fa';

function MovieDetails() {
  let { slug } = useParams();
  const [movie, setMovie] = useState(null);

  const URL = 'https://api.andrespecht.dev/movies/';

  useEffect(() => {
    async function getMovie() {
      try {
        const response = (await axios.get(URL)).data.response;
        const movieFound = response.find(movie => movie.slug === slug)
        setMovie(movieFound);
      } catch (error) {
        console.error('Failed to fetch movie:', error);
      }
    }

    getMovie();
  }, [slug])

  return (
    /*     
      Using `movie && (...)` to conditionally render movie details.
      This prevents a TypeError when `movie` is initially `null` during data fetching.
      It ensures rendering only occurs after `movie` state is updated with fetched data.
    */
    movie && (
    <>
      <div className="movie-container flex gap-30">
        <div className="poster-wrapper">
          <figure>
            <img className='movie-poster' src={movie.poster} alt={movie.title}/>
          </figure>
        </div>
        <div className="information-container">
          <div className="information">
            <h2>{movie.title}</h2>
            <p className="release-duration">
              <span>{movie.year}</span> | <span>{movie.runningTime}</span>
            </p>
            <p className="description">{movie.description}</p>
            <p className="genres flex gap-10">
              {movie.genre.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </p>
            <button className='flex play-btn'>
              <FaPlay />
              <span>Play movie</span>
            </button>
          </div>
        </div>
      </div>
      
    </>
    )  
  )
}

export default MovieDetails;