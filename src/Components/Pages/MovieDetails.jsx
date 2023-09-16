import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import tvIcon from '../../Assets/Images/tv.png'
import bgImage from '../../Assets/Images/bgImage.jpg'
import './moviedetails.css'

const MovieDetails = () => {
  const [active, setActive] = useState(1)
  const [detail, getDetail] = useState("")
  const { id } = useParams();

  const  formatToCustomUTC  = (dateString)  =>{
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  }

const moviesID = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=83a797d99c1fa3be5726cb64e8f3935a`)
    const data = await response.json()
    console.log(data)
    getDetail(data)
  }

  useEffect(() => {
     moviesID()
  },[])



  return (
    <div className='container-fluid'>
      <div id='wrapper' className='row vh-100'>
        <ul
          className='navbar-nav  shadow col-2 p-4 sidebar sidebar-light accordion'
          style={{ backgroundColor: '#fff' }}
          id='accordionSidebar'
        >
          <a
            className='sidebar-brand d-flex align-items-center justify-content-center text-decoration-none'
            href=''
          >
            <div
              className='sidebar-brand-text  mx-3'
              style={{ fontSize: '2.5rem', color: '#0133CA' }}
            >
              <Link
                to='/'
                className='text-decoration-none text-dark d-flex gap-3 align-items-center fw-bold fs-5'
                href='#'
              >
                <img src={tvIcon} alt='' />
                MovieBox
              </Link>
            </div>
          </a>

          {/* Side nav bar Start */}
          <li
            id='flex_display'
            className={active === 1 ? 'active nav-item p-2' : 'nav-item'}
            onClick={e => setActive(1)}
          >
            <Link className='text-decoration-none text-white' to={'/getmovies'}>
              <span className='mx-2 fw-bold fs-5'>Dashboard</span>
            </Link>
            {/* </a> */}
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link collapsed'
              to={'/'}
              data-toggle='collapse'
              data-target='#collapseUtilities'
              aria-expanded='true'
              aria-controls='collapseUtilities'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-person'
                viewBox='0 0 16 16'
              >
                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
              </svg>
              <span className='mx-2'>Home</span>
            </Link>
            <div
              id='collapseUtilities'
              className='collapse'
              aria-labelledby='headingUtilities'
              data-parent='#accordionSidebar'
            ></div>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link collapsed'
              href='#'
              data-toggle='collapse'
              data-target='#collapsePages'
              aria-expanded='true'
              aria-controls='collapsePages'
            >
              <i className='fas fa-fw fa-folder'></i>
              <span>Movies</span>
            </a>
            <div
              id='collapsePages'
              className='collapse'
              aria-labelledby='headingPages'
              data-parent='#accordionSidebar'
            ></div>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <i className='fas fa-fw fa-chart-area'></i>
              <span>TV Series</span>
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href=''>
              <i className='fas fa-fw fa-table'></i>
              <span>Upcoming</span>
            </a>
          </li>
        </ul>
        {/* Side nav bar ends */}

        {/* top Nav bar */}
        <div id='content-wrapper' className='col-10 p-0 d-flex flex-column'>
          <div className='px-5 py-3'>
            <div className='' id='image_container'>
            <img
              src={`https://image.tmdb.org/t/p/w200${detail.backdrop_path}`}
              alt='Background'
            />
            </div> 
            <div className='d-flex gap-2'><span>Release Date</span><p data-testid="movie-release-date">{formatToCustomUTC(detail.release_date)}</p></div>
            <div className='d-flex gap-2'> <span>Runtime</span> <p  data-testid="movie-runtime"> {detail.runtime} minutes</p></div>
            <p data-testid="movie-title">{detail.title}</p>
            <p data-testid="movie-overview">{detail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
