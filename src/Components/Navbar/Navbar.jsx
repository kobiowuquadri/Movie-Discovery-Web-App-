import './navbar.css'
import tvIcon from '../../Assets/Images/tv.png'
import menuBar from '../../Assets/Images/Menu.png'
import { Link } from 'react-router-dom';
import imdbIcon from '../../Assets/Images/IMDB.png'
import rottenTomatoes from '../../Assets/Images/Rotten Tomatoes.png'
import playBtn from '../../Assets/Images/Play.svg'



const Navbar = () => {
  return (  
    <div className="header_section">
      <div className="navbar_section">
          <Link href="/" id="logo">
            <span><img src={tvIcon} alt="" /></span>
            <span id='logo_text'>MovieBox</span>
          </Link>
  
        <div className="search">
         <span>🔍</span>
          <input type="search" name="" id="" />
        </div>
        <div className="nav_links">
          <ul>
            <li>Sign in</li>
            <li><img src={menuBar} alt="" /></li>
          </ul>
        </div>
      </div>

      <div className="main">
        <h1>John Wick 3 : Parabellum</h1>
        <p id='img'>
          <img src={imdbIcon} alt="" />
          <img src={rottenTomatoes} alt="" />
        </p>
        <p>
        John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
        </p>
        <button id='btn'><img src={playBtn} alt="" />Watch Trailer</button>
      </div>
    </div>
  );
}
 
export default Navbar;
