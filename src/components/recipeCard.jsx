import { FaUtensils, FaClock } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFavorite } from "../context/favoriteContext";
import { useRecent } from "../context/recentContext";

import "../css/recipeCard.css";

export const RecipeCard = ({ recipe }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorite();
  const { addRecent } = useRecent();
  const navigate = useNavigate();

  const favorite = isFavorite(recipe.id);

  const handleFavClick = (e) => {
    e.stopPropagation();
    if (favorite) removeFromFavorites(recipe.id);
    else addToFavorites(recipe);
  };

  const handleTryRecipe = (e) => {
    e.stopPropagation();
    addRecent(recipe);
    navigate(`/detail/${recipe.id}`);
  };

  // Helper formatting for dynamic API data
  const mealType =
    recipe.meal ||
    (recipe.dishTypes && recipe.dishTypes.length > 0
      ? recipe.dishTypes[0].charAt(0).toUpperCase() + recipe.dishTypes[0].slice(1)
      : "Main Meal");

  const servingsText = recipe.servings
    ? `${recipe.servings} servings`
    : recipe.people
    ? typeof recipe.people === "number"
      ? `${recipe.people} servings`
      : recipe.people
    : "4 servings";

  const timeText = recipe.time
    ? recipe.time
    : recipe.readyInMinutes
    ? (() => {
        const hrs = Math.floor(recipe.readyInMinutes / 60);
        const mins = recipe.readyInMinutes % 60;
        if (hrs > 0) {
          return `${hrs} hour${hrs > 1 ? "s" : ""}${mins > 0 ? ` ${mins} minute${mins > 1 ? "s" : ""}` : ""}`;
        }
        return `${mins} minutes`;
      })()
    : "20 minutes";

  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />

        {/* Heart / Favourite button — top-right of image */}
        <button
          className={`card-favourite-btn ${favorite ? "active" : ""}`}
          aria-label={favorite ? "Remove from favourites" : "Add to favourites"}
          title={favorite ? "Remove from favourites" : "Add to favourites"}
          onClick={handleFavClick}
        >
          {favorite ? (
            <FaHeart className="card-heart-icon active" />
          ) : (
            <FaRegHeart className="card-heart-icon" />
          )}
        </button>
      </div>

      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>

        <div className="recipe-details">
          <div className="recipe-detail">
            <FaUtensils className="detail-icon" />
            <span>{mealType}</span>
          </div>

          <div className="recipe-detail">
            <MdOutlinePeopleAlt className="detail-icon" />
            <span>{servingsText}</span>
          </div>

          <div className="recipe-detail">
            <FaClock className="detail-icon" />
            <span>{timeText}</span>
          </div>
        </div>

        {/* Try this recipe arrow */}
        <button className="try-recipe-btn" onClick={handleTryRecipe}>
          Try this recipe <FaArrowRight className="try-arrow-icon" />
        </button>
      </div>
    </div>
  );
};
