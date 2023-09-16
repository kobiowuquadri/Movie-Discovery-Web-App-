import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import bgImage from '../../Assets/Images/bgImage.jpg'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import './Homepage.css'


function HomePage() {
  const [showMovies, setShowMovies] = useState(10)
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const showMoreItems = () => {
    setShowMovies(showMovies + 10)
  }

  const getMoviesAPI = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=83a797d99c1fa3be5726cb64e8f3935a',
        options
      );
      const data = await response.json();
      console.log(data?.results);
      setMovies(data?.results);
      setLoading(false)
    }
    catch(err){
      console.log(err.message)
      setLoading(false)
    }
  };

  useEffect(() => {
    
    getMoviesAPI();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <Navbar />
      <div className='container-fluid p-5'>
        <div className=" d-flex justify-content-between">
          <p className='h1'>Favorite</p>
          <p><button className='text-decoration-none text-black h4' onClick={showMoreItems}>See More</button></p>
        </div>
        <div className='row g-5 align-items-lg-start'>
          {movies.slice(0, showMovies).map(item => (
            <div className='col-6 col-sm-4 col-md-3' key={item.id}>
              <Link className='text-decoration-none' to={`/getmovies/${item.id}`}>
              <div id='card' className='card border-0 shadow' data-testid="movie-card">
                <img data-testid="movie-poster"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <p data-testid="movie-release-date">{item.release_date}</p>
                  <h5 className='card-title' id='text' data-testid="movie-title">{item.original_title}</h5>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
