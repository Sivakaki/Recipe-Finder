import { Link } from "react-router-dom";
import { LuSunMoon } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";

import "../css/navbar.css";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">Recipe Finder</div>
        {/* <Link to="/" className="navbar-logo">
          Recipe Finder
        </Link> */}

        <nav className="navbar-menu">
          {/* <Link to="/" className="navbar-link">
            Home
          </Link>

          <Link to="/favorites" className="navbar-link">
            Favorites
          </Link>

          <Link to="/recent" className="navbar-link">
            Recents
          </Link> */}
          <div className="navbar-link">Home</div>

          <div className="navbar-link">Favorites</div>

          <div className="navbar-link">Recents</div>
        </nav>
      </div>

      <div className="navbar-right">
        <button className="icon-button">
          <LuSunMoon />
        </button>

        <button className="icon-button">
          <MdAccountCircle />
        </button>
      </div>
    </header>
  );
};
