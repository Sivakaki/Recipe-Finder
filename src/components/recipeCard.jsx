import { SiMealie } from "react-icons/si";
import { FaClock, FaArrowRight } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import "../css/recipeCard.css";

export const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />

        {/* Heart / Favourite button — top-right of image */}
        <button
          className="card-favourite-btn"
          aria-label="Add to favourites"
          title="Add to favourites"
        >
          <FaRegHeart className="card-heart-icon" />
        </button>
      </div>

      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>

        {recipe.description && (
          <p className="recipe-description">{recipe.description}</p>
        )}

        {(recipe.meal || recipe.people || recipe.time) && (
          <div className="recipe-details">
            {recipe.meal && (
              <div className="recipe-detail">
                <SiMealie />
                <span>{recipe.meal}</span>
              </div>
            )}

            {recipe.people && (
              <div className="recipe-detail">
                <MdOutlinePeopleAlt />
                <span>{recipe.people} People</span>
              </div>
            )}

            {recipe.time && (
              <div className="recipe-detail">
                <FaClock />
                <span>{recipe.time}</span>
              </div>
            )}
          </div>
        )}

        <div className="recipe-action">
          <span className="recipe-action-link">
            Try this recipe <FaArrowRight className="action-arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};
