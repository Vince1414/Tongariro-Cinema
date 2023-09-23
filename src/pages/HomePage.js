import Carousel from '../Carousel.js';
import MoviesData from '../MoviesData';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
 const navigate = useNavigate();

 const handleBookNow = (movieTitle) => {
  // Navigate to BookingPage with the movie title as a parameter
  navigate(`/booking/${encodeURIComponent(movieTitle)}`);
 };

 return (
  <div className="home">
   <Carousel />

   <h1>What's On This Week</h1>
   {MoviesData.map((movie) => (
    <div className="movies" key={movie.id}>
     <div className="card-container">
      <div className="card">
       <img src={movie.imageUrl} alt="movie cover" />
      </div>
      <div className="card">
       <h3>{movie.title}</h3>
       <p>{movie.description}</p>
       <p>Release Date: {movie.releasedate}</p>
       <p>Running Time: {movie.runningtime}</p>
      </div>
      <div className="card">
       <button onClick={() => handleBookNow(movie.title)}>Book Now</button>
      </div>
     </div>
    </div>
   ))}

  </div>
 )
}
export default HomePage;