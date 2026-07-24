import { MdFavorite, MdFavoriteBorder, MdDelete } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { RecipeCard } from "../components/RecipeCard";

import "../css/favorites.css";

/* ─── Static placeholder data (replace with real state/context later) ─── */
const favoriteRecipes = [
  {
    id: 1,
    title: "Chicken Fry",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600",
    description:
      "Crispy golden chicken pieces seasoned with aromatic spices — a crowd-pleasing classic ready in 20 minutes.",
    meal: "Main Meal",
    people: 4,
    time: "20 Minutes",
  },
  {
    id: 2,
    title: "Pasta Alfredo",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
    description:
      "Silky cream sauce tossed with al-dente pasta and freshly grated parmesan. Simple, rich, and utterly satisfying.",
    meal: "Dinner",
    people: 2,
    time: "30 Minutes",
  },
  {
    id: 3,
    title: "Veg Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    description:
      "A juicy, flavour-packed vegetable patty stacked with fresh toppings and a brioche bun — the ultimate veggie burger.",
    meal: "Snack",
    people: 1,
    time: "15 Minutes",
  },
  {
    id: 4,
    title: "Fluffy Pancakes",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
    description:
      "Light, airy breakfast pancakes with a golden crust. Perfect with maple syrup, fresh berries, or a dollop of cream.",
    meal: "Breakfast",
    people: 3,
    time: "25 Minutes",
  },
];



const filterOptions = ["All", "Breakfast", "Main Meal", "Dinner", "Snack", "Dessert"];

export const Favorites = () => {
  const isEmpty = favoriteRecipes.length === 0;

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
            <button className="clear-all-btn">
              <MdDelete />
              Clear all
            </button>
          )}
          <span className="favorites-count-badge">
            {favoriteRecipes.length} Saved
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
          <button className="empty-cta-btn">
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
                  className={`filter-chip${opt === "All" ? " active" : ""}`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="favorites-sort">
              <label className="sort-label" htmlFor="sort-select">
                Sort by:
              </label>
              <select id="sort-select" className="sort-select">
                <option value="recent">Recently Added</option>
                <option value="az">A – Z</option>
                <option value="za">Z – A</option>
                <option value="time">Cook Time</option>
              </select>
            </div>
          </div>

          {/* ── Favorites Grid ── */}
          <div className="favorites-grid">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
