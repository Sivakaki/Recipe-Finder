import { Search } from "../components/Search";
import { RecipeCards } from "../components/RecipeCards";
import { IoSparklesSharp } from "react-icons/io5";
import { FaUtensils, FaClock, FaHeart } from "react-icons/fa6";

import "../css/home.css";

export const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">
            <IoSparklesSharp className="badge-icon" /> Discover Amazing Recipes
          </span>

          <h1 className="hero-title">
            Find Your Next <span className="highlight-text">Favorite Meal</span>
          </h1>

          <p className="hero-description">
            Search thousands of recipes by meal type, cuisine, dietary
            preferences, and cooking time. Discover delicious dishes for every
            occasion.
          </p>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <FaUtensils className="stat-icon" />
              <div className="stat-info">
                <strong>10,000+</strong>
                <span>Recipes</span>
              </div>
            </div>

            <div className="hero-stat-divider" />

            <div className="hero-stat-item">
              <FaClock className="stat-icon" />
              <div className="stat-info">
                <strong>Under 30 Min</strong>
                <span>Quick Prep</span>
              </div>
            </div>

            <div className="hero-stat-divider" />

            <div className="hero-stat-item">
              <FaHeart className="stat-icon" />
              <div className="stat-info">
                <strong>100%</strong>
                <span>Nutritious</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Search />

      <RecipeCards />
    </div>
  );
};
