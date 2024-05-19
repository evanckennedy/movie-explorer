import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

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
        console.log(movie)
      } catch (error) {
        console.error('Failed to fetch movie:', error);
      }
    }

    getMovie()
  }, [slug])

  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails;