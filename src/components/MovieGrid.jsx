import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useEffect } from 'react';

function MovieGrid() {
  const URL = 'https://api.andrespecht.dev/movies';

  useEffect(() => {
    async function getMovies() {
      try {
        const response = (await axios.get(URL)).data.response;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  
    getMovies();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="grid-container">
        <Link to=''>
          <div className="column">
            <div className="content-container flex">
              <figure>
                <img src="https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg" alt="" />
              </figure>
              <div className="content-text flex justify-between">
                <p>Jurassic Park</p>
                <p>1993</p>
              </div>
            </div>
          </div>
        </Link>
        {/* Repeat the above div for each movie */}
      </div>
    </>
  )
}

export default MovieGrid;