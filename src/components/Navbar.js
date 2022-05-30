import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        {/* <div className="navbar-logo"> */}
        <Link to="/">
          <img src={logo} alt="dope race logo" className="logo" />
        </Link>
        {/* </div> */}
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
