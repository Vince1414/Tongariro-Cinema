import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
 return (
  <nav>

   <div className="logo">
    <Link to="/">
     <img src="/images/Logo.svg" alt="Logo" itemType="button"></img>
    </Link>
   </div>

   <ul>
    <li>
     <NavLink to="/" exact activeClassName="active">
      Home
     </NavLink>
    </li>
    <li>
     <NavLink to="/bookingpage" activeClassName="active">
      Booking
     </NavLink>
    </li>
    <li>
     <NavLink to="/upcomingpage" activeClassName="active">
      Upcoming Movies
     </NavLink>
    </li>
    <li>
     <NavLink to="/dealspage" activeClassName="active">
      Deals
     </NavLink>
    </li>
    <li>
     <NavLink to="/fnbpage" activeClassName="active">
      Food & Beverages
     </NavLink>
    </li>
   </ul>
  </nav>
 );
}

export default NavBar;