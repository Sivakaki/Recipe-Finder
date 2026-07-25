import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import "../css/search.css";

export const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [mealType, setMealType] = useState("All Types");
  const [cuisine, setCuisine] = useState("All Cuisines");
  const [diet, setDiet] = useState("All Diets");
  const [cookingTime, setCookingTime] = useState("Any Time");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      query,
      mealType,
      cuisine,
      diet,
      cookingTime,
    });
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <section className="search-section">
      {/* Title */}
      <h2 className="search-title">Search</h2>

      {/* Search row: input left, Advanced Filters right */}
      <form className="search-row" onSubmit={handleSubmit}>
        {/* Input group */}
        <div className="search-bar">
          <label htmlFor="search-query" className="search-label">
            Find a recipe
          </label>

          <div className="search-input-wrapper">
            <input
              type="text"
              id="search-query"
              className="search-input"
              placeholder="Search recipes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="search-icon-btn" aria-label="Search">
              <CiSearch />
            </button>
          </div>
        </div>

        {/* Advanced Filters — far right */}
        <button type="button" className="filter-toggle" onClick={toggleFilters}>
          Advanced filters
          <IoIosArrowDown className={`filter-arrow ${showFilters ? "open" : ""}`} />
        </button>
      </form>

      {/* Filter Panel */}
      {showFilters && (
        <div className="filter-container">
          <h3 className="filter-title">Filter By</h3>

          <div className="filter-grid">
            <div className="filter-group">
              <label htmlFor="meal-type">Meal Type</label>
              <select
                id="meal-type"
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
              >
                <option>All Types</option>
                <option>Main Meal</option>
                <option>Breakfast</option>
                <option>Dessert</option>
                <option>Snack</option>
                <option>Side Dish</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="cuisine-type">Cuisine</label>
              <select
                id="cuisine-type"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              >
                <option>All Cuisines</option>
                <option>Italian</option>
                <option>Mexican</option>
                <option>Asian</option>
                <option>Indian</option>
                <option>Mediterranean</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="diet-type">Dietary Preference</label>
              <select
                id="diet-type"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
              >
                <option>All Diets</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Gluten-Free</option>
                <option>Dairy-Free</option>
                <option>Heart Healthy</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="cook-time">Cooking Time</label>
              <select
                id="cook-time"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
              >
                <option>Any Time</option>
                <option>Below 20 Minutes</option>
                <option>20 - 45 Minutes</option>
                <option>Over 45 Minutes</option>
              </select>
            </div>
          </div>

          <button className="search-btn" onClick={handleSubmit}>Search Recipes</button>
        </div>
      )}
    </section>
  );
};
