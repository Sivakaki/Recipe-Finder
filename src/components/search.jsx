import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import "../css/search.css";

export const Search = () => {
  return (
    <section className="search-section">
      {/* Title */}
      <h2 className="search-title">Search</h2>

      {/* Search row: input left, Advanced Filters right */}
      <div className="search-row">
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
            />
            <button className="search-icon-btn" aria-label="Search">
              <CiSearch />
            </button>
          </div>
        </div>

        {/* Advanced Filters — far right */}
        <button className="filter-toggle">
          Advanced filters
          <IoIosArrowDown className="filter-arrow" />
        </button>
      </div>

      {/* Filter Panel */}
      <div className="filter-container">
        <h3 className="filter-title">Filter By</h3>

        <div className="filter-grid">
          <div className="filter-group">
            <label htmlFor="meal-type">Meal Type</label>
            <select id="meal-type">
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
            <select id="cuisine-type">
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
            <select id="diet-type">
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
            <select id="cook-time">
              <option>Any Time</option>
              <option>Below 20 Minutes</option>
              <option>20 - 45 Minutes</option>
              <option>Over 45 Minutes</option>
            </select>
          </div>
        </div>

        <button className="search-btn">Search Recipes</button>
      </div>
    </section>
  );
};
