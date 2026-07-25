import { useState, useEffect } from "react";
import { Search } from "../components/Search";
import { RecipeCards } from "../components/RecipeCards";
import { IoSparklesSharp } from "react-icons/io5";
import { FaUtensils, FaClock, FaHeart } from "react-icons/fa6";
import { getRandomRecipes, fetchRecipes } from "../services/recipeapi";

import "../css/home.css";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load initial random recipes
  useEffect(() => {
    const loadRandom = async () => {
      setLoading(true);
      try {
        const data = await getRandomRecipes();
        if (data && data.length > 0) setRecipes(data);
      } catch (err) {
        console.error("Error loading random recipes:", err);
      }
      setLoading(false);
    };
    loadRandom();
  }, []);

  const handleSearch = async (filters) => {
    setLoading(true);
    try {
      const data = await fetchRecipes(filters);
      if (data && data.length > 0) setRecipes(data);
    } catch (err) {
      console.error("Error searching recipes:", err);
    }
    setLoading(false);
  };

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

      <Search onSearch={handleSearch} />

      {loading ? (
        <div style={{ textAlign: "center", padding: "3rem", fontSize: "1.2rem", fontWeight: "bold", color: "var(--primary)" }}>
          Loading recipes...
        </div>
      ) : (
        <RecipeCards recipes={recipes} />
      )}
    </div>
  );
};
