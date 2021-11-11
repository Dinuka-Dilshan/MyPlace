import { Link } from "react-router-dom";
import "./Navitems.css";

const NavItems = (props) => {
  return (
    <div className="nav-items-wrapper">
      <div className="logo-wrapper">
        <Link to='/' className='text-decoration-none'><h1 className='logo'>MyPlace</h1></Link>
      </div>

      <div className='links'>
        <Link className="navLink" to="/places">
          Places
        </Link>
        <Link className="navLink" to="/users">
          Users
        </Link>
      </div>
    </div>
  );
};

export default NavItems;
