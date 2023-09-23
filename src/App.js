import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import UpComingPage from './pages/UpComingPage';
import DealsPage from './pages/DealsPage';
import FnBPage from './pages/FnBPage';
import NavBar from './NavBar';
import Footer from './Footer';
import BookingPage from './pages/BookingPage';

function App() {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleSelectMovie = (movie) => {
    setSelectedMovies([...selectedMovies, movie]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path='/' element={<HomePage onSelectMovie={handleSelectMovie} />} />
            <Route path='/booking/:movieTitle' element={<BookingPage selectedMovies={selectedMovies} />} />
            <Route path='/upcomingpage' element={<UpComingPage />} />
            <Route path='/dealspage' element={<DealsPage />} />
            <Route path='/fnbpage' element={<FnBPage />} />
          </Routes>
        </div>
        <Footer path='/' />
      </div>
    </BrowserRouter>
  );
}

export default App;
