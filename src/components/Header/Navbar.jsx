import Cartwidget from "../Main/Cartwidget.jsx";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <Link className="logo" to="/">
            <img
              src="https://res.cloudinary.com/ddcg1jktl/image/upload/v1666313420/Logo_Definitivo_-_Sweet_Pop_h1uujz.png"
              alt=""
            />
          </Link>

          <div className="navbar-links">
            <NavLink to="/category/cakes">
              <h2>Cakes</h2>
            </NavLink>
            <NavLink to="/category/cookies">
              <h2>Cookies</h2>
            </NavLink>
            <NavLink to="/category/cupcakes">
              <h2>Cupcakes</h2>
            </NavLink>
          </div>
          <NavLink to="/cart">
            <Cartwidget />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
