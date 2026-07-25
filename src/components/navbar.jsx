import { Link } from "react-router-dom";
import { LuSunMoon } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { useTheme } from "../context/themeContext";

import "../css/navbar.css";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          Recipe Finder
        </Link>

        <nav className="navbar-menu">
          <Link to="/" className="navbar-link">
            Home
          </Link>

          <Link to="/favorites" className="navbar-link">
            Favorites
          </Link>

          <Link to="/recent" className="navbar-link">
            Recents
          </Link>
        </nav>
      </div>

      <div className="navbar-right">
        <button className="icon-button" onClick={toggleTheme}>
          <LuSunMoon />
        </button>

        <button className="icon-button">
          <MdAccountCircle />
        </button>
      </div>
    </header>
  );
};
