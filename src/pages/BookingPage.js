import React from 'react';
import { useParams } from 'react-router-dom';
import MoviesData from '../MoviesData';

const BookingPage = () => {
 const { movieTitle } = useParams();
 const selectedMovie = MoviesData.find((movie) => movie.title === movieTitle);

 if (!selectedMovie) {
  return <div>Movie not found</div>;
 }

 return (
  <div className="booking">
   <h1>Booking for {selectedMovie.title}</h1>
   <div className="card-container">
    <div className="card">
     <img src={selectedMovie.imageUrl} alt="movie cover" />
    </div>
    <div className="card">
     <h3>{selectedMovie.title}</h3>
     <p>{selectedMovie.description}</p>
     <p>Release Date: {selectedMovie.releasedate}</p>
     <p>Running Time: {selectedMovie.runningtime}</p>
    </div>

    <div className="card">
     <div className="card-booking">
      <button>2:00PM<br />11 Feb 2023</button>
      <button>2:00PM<br />12 Feb 2023</button>
     </div>
     <div className="card-booking">
      <button>5:00PM<br />11 Feb 2023</button>
      <button>5:00PM<br />12 Feb 2023</button>
     </div>
     <div className="card-booking">
      <button>8:00PM<br />11 Feb 2023</button>
      <button>8:00PM<br />12 Feb 2023</button>
     </div>
    </div>

    {/* <div className="booking-con">
    <img src={selectedMovie.imageUrl} alt="" className="card" />
    <div className="card">
     <h3>{selectedMovie.title}</h3>
     <p>{selectedMovie.description}</p>
     <p>Release Date: {selectedMovie.releasedate}</p>
     <p>Running Time: {selectedMovie.runningtime}</p>
    </div>
    <div className="card">
     <button>2:00PM 11 Feb 2023</button>
     <button>2:00PM 11 Feb 2023</button>
    </div> */}
   </div>
  </div>
 );
};

export default BookingPage;
