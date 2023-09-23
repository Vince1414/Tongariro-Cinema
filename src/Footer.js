import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
 return (
  <footer>
   <div className="container">
    <Link to="/">
     <img className="logofooter" src="/images/Logo.svg" alt="LogoFooter" itemType="button"></img>
    </Link>
   </div>

   <div className="container">

    <ul>
     <li>
      <Link to="/">Home</Link>
     </li>
     <li>
      <Link to="/nowplayingpage">Now Playing</Link>
     </li>
     <li>
      <Link to="/upcomingpage">Upcoming Movies</Link>
     </li>
     <li>
      <Link to="/dealspage">Deals</Link>
     </li>
    </ul>

   </div>

  </footer>
 );
}

export default Footer;