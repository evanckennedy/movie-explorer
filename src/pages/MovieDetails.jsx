import { useParams } from 'react-router-dom';

function MovieDetails() {
  let { slug } = useParams();

/*   Use the slug to fetch or display the details of the movie
  useEffect(() => {
    fetchMovieDetails(slug);
  }, [slug]); */

  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails;