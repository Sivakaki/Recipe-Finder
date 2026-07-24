import { RecipeCard } from "./RecipeCard";
import "../css/recipeCards.css";

const defaultRecipes = [
  {
    id: 1,
    title: "Chicken Fry",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600",
    meal: "Main Meal",
    people: 4,
    time: "20 Minutes",
  },
  {
    id: 2,
    title: "Pasta Alfredo",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
    meal: "Dinner",
    people: 2,
    time: "30 Minutes",
  },
  {
    id: 3,
    title: "Veg Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    meal: "Snack",
    people: 1,
    time: "15 Minutes",
  },
  {
    id: 4,
    title: "Pancakes",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
    meal: "Breakfast",
    people: 3,
    time: "25 Minutes",
  },
  {
    id: 5,
    title: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    meal: "Dinner",
    people: 5,
    time: "40 Minutes",
  },
  {
    id: 6,
    title: "Caesar Salad",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600",
    meal: "Lunch",
    people: 2,
    time: "15 Minutes",
  },
];

export const RecipeCards = ({
  title = "View All Recipes",
  subtitle = "Discover delicious recipes for every occasion.",
  recipes = defaultRecipes,
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
          showCount && (
            <span className="recipe-count">{recipes.length} Recipes</span>
          )
        )}
      </div>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};