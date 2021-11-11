import { NavLink } from "react-router-dom";
import "./Logo.css";
const Logo = (props) => {
  return (
    <div className='logo-wrapper' style={props.logoWrapper}>
      <NavLink to="/" className="text-decoration-none">
        <h1 className="logo">MyPlace</h1>
      </NavLink>
    </div>
  );
};

export default Logo;
