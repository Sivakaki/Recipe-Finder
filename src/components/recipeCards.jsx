import { RecipeCard } from "./RecipeCard";
import { MdOutlineSearchOff } from "react-icons/md";
import "../css/recipeCards.css";

export const RecipeCards = ({
  title = "View All Recipes",
  subtitle = "Discover delicious recipes for every occasion.",
  recipes = [],
  buttonText,
  showCount = true,
}) => {
  return (
    <section className="recipe-section">
      <div className="recipe-section-header">
        <div>
          <h2 className="recipe-section-title">{title}</h2>
          {subtitle && <p className="recipe-section-subtitle">{subtitle}</p>}
        </div>

        {buttonText ? (
          <button className="see-more-btn">{buttonText}</button>
        ) : (
          showCount && recipes.length > 0 && (
            <span className="recipe-count">{recipes.length} Recipes</span>
          )
        )}
      </div>

      {recipes && recipes.length > 0 ? (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon-wrap">
            <MdOutlineSearchOff className="empty-icon" />
          </div>
          <h3 className="empty-title">No Recipes Found</h3>
          <p className="empty-message">
            We couldn't load any recipes right now. This may be due to an API
            limit or network issue. Try searching for something specific or
            check back later.
          </p>
        </div>
      )}
    </section>
  );
};