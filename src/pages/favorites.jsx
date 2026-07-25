import { MdFavorite, MdFavoriteBorder, MdDelete } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";
import { useFavorite } from "../context/favoriteContext";
import { useState } from "react";

import "../css/favorites.css";

const filterOptions = [
  "All",
  "Breakfast",
  "Main Meal",
  "Dinner",
  "Snack",
  "Dessert",
];

export const Favorites = () => {
  const { favorites, clearAll } = useFavorite();
  const navigate = useNavigate();

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortBy, setSortBy] = useState("recent");

  let filteredRecipes =
    selectedFilter === "All"
      ? favorites
      : favorites.filter((recipe) => recipe.meal === selectedFilter);

  let sortedRecipes = [...filteredRecipes];

  switch (sortBy) {
    case "az":
      sortedRecipes.sort((a, b) => a.title.localeCompare(b.title));
      break;

    case "za":
      sortedRecipes.sort((a, b) => b.title.localeCompare(a.title));
      break;

    case "time":
      sortedRecipes.sort((a, b) => {
        const timeA = a.time || a.readyInMinutes || 0;
        const timeB = b.time || b.readyInMinutes || 0;
        return timeA - timeB;
      });
      break;

    default:
      break;
  }

  const isEmpty = favorites.length === 0;

  return (
    <div className="favorites-page">
      {/* ── Page Header ── */}
      <header className="favorites-header">
        <div className="favorites-heading-group">
          <h1 className="favorites-title">
            <MdFavorite className="favorites-title-icon" />
            My Favorites
          </h1>
          <p className="favorites-subtitle">
            All the recipes you've saved — ready whenever you are.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {!isEmpty && (
            <button className="clear-all-btn" onClick={clearAll}>
              <MdDelete />
              Clear all
            </button>
          )}
          <span className="favorites-count-badge">
            {sortedRecipes.length} Saved
          </span>
        </div>
      </header>

      {isEmpty ? (
        /* ── Empty State ── */
        <div className="favorites-empty">
          <span className="empty-icon">
            <MdFavoriteBorder />
          </span>
          <h2 className="empty-title">Nothing saved yet</h2>
          <p className="empty-desc">
            Browse recipes and tap the heart icon to save your favourites here
            for quick access later.
          </p>
          <button className="empty-cta-btn" onClick={() => navigate("/")}>
            <FaFire />
            Explore Recipes
          </button>
        </div>
      ) : (
        <>
          {/* ── Filter / Sort Toolbar ── */}
          <div className="favorites-toolbar">
            <div className="favorites-filters">
              <span className="filter-label">Filter:</span>
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedFilter(opt)}
                  className={`filter-chip ${opt === selectedFilter ? "active" : ""}`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="favorites-sort">
              <label className="sort-label" htmlFor="sort-select">
                Sort by:
              </label>
              <select
                id="sort-select"
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recent">Recently Added</option>
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
                <option value="time">Cook Time</option>
              </select>
            </div>
          </div>

          {/* ── Favorites Grid ── */}
          <div className="favorites-grid">
            {sortedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
