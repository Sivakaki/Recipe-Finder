import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SiMealie } from "react-icons/si";
import { FaClock } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RecipeCard } from "../components/RecipeCard";
import { useFavorite } from "../context/favoriteContext";
import { recipeDetail, relatedRecipes as fetchRelated } from "../services/recipeapi";

import "../css/detail.css";


export const Detail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedLimit, setRelatedLimit] = useState(3);

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorite();
  const favorite = recipe ? isFavorite(recipe.id) : false;

  useEffect(() => {
    const loadDetail = async () => {
      setLoading(true);
      try {
        const detailsData = await recipeDetail(id);
        if (detailsData && detailsData.title) {
          setRecipe(detailsData);
          const relatedData = await fetchRelated(id, 10);
          if (relatedData && relatedData.length > 0) setRelated(relatedData);
        }
      } catch (err) {
        console.error("Error loading recipe details:", err);
      }
      setLoading(false);
    };
    loadDetail();
    setRelatedLimit(3);
  }, [id]);

  const handleSeeMoreRelated = () => {
    setRelatedLimit(10);
  };

  const handleFavToggle = () => {
    if (!recipe) return;
    if (favorite) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        description: recipe.summary ? recipe.summary.replace(/<[^>]*>?/gm, '').slice(0, 150) + "..." : "",
        meal: recipe.dishTypes && recipe.dishTypes.length > 0 ? recipe.dishTypes[0] : "Meal",
        people: recipe.servings,
        time: recipe.readyInMinutes + " Minutes",
      });
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "5rem", fontSize: "1.2rem", fontWeight: "bold", color: "var(--primary)" }}>
        Loading recipe details...
      </div>
    );
  }

  if (!recipe) {
    return (
      <div style={{ textAlign: "center", padding: "5rem", fontSize: "1.2rem", fontWeight: "bold", color: "red" }}>
        Recipe not found!
      </div>
    );
  }

  // Parse clean description
  const cleanDescription = recipe.summary
    ? recipe.summary.replace(/<[^>]*>?/gm, "").split(".")[0] + "."
    : "Enjoy this delicious recipe.";

  // Extract Nutrition values from Spoonacular details if present
  const nutrition = recipe.nutrition?.nutrients || [];
  const getNutrient = (name) => {
    const item = nutrition.find((n) => n.name.toLowerCase() === name.toLowerCase());
    return item ? { amount: Math.round(item.amount) + item.unit, percent: Math.round(item.percentOfDailyNeeds) } : { amount: "-", percent: 0 };
  };

  const caloriesVal = getNutrient("Calories").amount;
  const carbsVal = getNutrient("Carbohydrates");
  const fatVal = getNutrient("Fat");
  const saturatesVal = getNutrient("Saturated Fat");
  const sugarVal = getNutrient("Sugar");
  const sodiumVal = getNutrient("Sodium"); // In mg, let's convert to g for salt: sodium * 2.5 / 1000
  
  // Calculate salt (approximate from sodium: mg sodium -> g salt = mg * 0.0025)
  const sodiumMg = recipe.nutrition?.nutrients?.find((n) => n.name.toLowerCase() === "sodium")?.amount || 0;
  const saltG = ((sodiumMg * 2.5) / 1000).toFixed(2) + "g";
  const saltPercent = Math.round((sodiumMg * 2.5) / 60); // GDA for salt is ~6g (6000mg sodium)

  // Dynamically determine high/medium/low traffic light categories based on daily percent value thresholds
  const getCategoryClass = (percent, type) => {
    if (type === "calories" || type === "carbs") return "neutral";
    if (percent < 10) return "low";
    if (percent >= 10 && percent < 25) return "medium";
    return "high";
  };

  const getBadgeLabel = (percent, type) => {
    if (type === "calories" || type === "carbs") return null;
    if (percent < 10) return "Low";
    if (percent >= 10 && percent < 25) return "Medium";
    return "High";
  };

  const nutrientsList = [
    { label: "Energy", val: caloriesVal, subval: "Calories", percent: getNutrient("Calories").percent, type: "calories" },
    { label: "Carbs", val: carbsVal.amount, subval: null, percent: carbsVal.percent, type: "carbs" },
    { label: "Fat", val: fatVal.amount, subval: null, percent: fatVal.percent, type: "fat" },
    { label: "Saturates", val: saturatesVal.amount, subval: null, percent: saturatesVal.percent, type: "saturates" },
    { label: "Sugar", val: sugarVal.amount, subval: null, percent: sugarVal.percent, type: "sugar" },
    { label: "Salt", val: saltG, subval: null, percent: saltPercent, type: "salt" }
  ];

  return (
    <article className="detail-page">
      {/* Hero Header */}
      <section className="detail-hero">
        <div className="hero-content">
          <div className="detail-content">
            <span className="detail-tag">{recipe.dishTypes?.[0] || "EAT WELL"}</span>

            <h1 className="detail-title">{recipe.title}</h1>

            <p className="detail-description">{cleanDescription}</p>

            {/* Add to Favourites button */}
            <button
              className={`detail-fav-btn ${favorite ? "saved" : ""}`}
              onClick={handleFavToggle}
            >
              {favorite ? (
                <>
                  <FaHeart className="detail-fav-icon" />
                  Saved to Favourites
                </>
              ) : (
                <>
                  <FaRegHeart className="detail-fav-icon" />
                  Add to Favourites
                </>
              )}
            </button>
          </div>

          <div className="detail-image">
            <img src={recipe.image} alt={recipe.title} />
          </div>
        </div>

        {/* Recipe Summary Meta Bar */}
        <div className="recipe-summary">
          <div className="summary-item">
            <SiMealie className="summary-icon" />
            <span className="summary-label">Meal type:</span>
            <strong className="summary-val">
              {recipe.dishTypes?.[0] || "Main Meal"}
            </strong>
          </div>

          <span className="summary-divider">|</span>

          <div className="summary-item">
            <MdOutlinePeopleAlt className="summary-icon" />
            <span className="summary-label">Serves:</span>
            <strong className="summary-val">{recipe.servings}</strong>
          </div>

          <span className="summary-divider">|</span>

          <div className="summary-item">
            <FaClock className="summary-icon" />
            <span className="summary-label">Total time:</span>
            <strong className="summary-val">{recipe.readyInMinutes} mins</strong>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="detail-body">
        {/* Left Content Area */}
        <div className="detail-left">
          <section className="detail-section instructions-section">
            <h2>Instructions</h2>
            <ol className="instruction-list">
              {recipe.analyzedInstructions?.[0]?.steps?.map((step) => (
                <li key={step.number}>{step.step}</li>
              )) || (
                <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
              )}
            </ol>
          </section>

          {/* Cook's Tips */}
          {recipe.tips && (
            <section className="detail-section tips-section">
              <h2>Cook's tips</h2>
              <ul className="tips-list">
                <li>{recipe.tips}</li>
              </ul>
            </section>
          )}

          {/* Nutritional Information */}
          <section className="detail-section nutrition-section">
            <div className="nutrition-container">
              <h2>Nutritional Information</h2>
              <p className="nutrition-subtitle">Each Portion Contains:</p>

              <div className="nutrition-cards">
                {nutrientsList.map((item) => {
                  const catClass = getCategoryClass(item.percent, item.type);
                  const badgeLabel = getBadgeLabel(item.percent, item.type);

                  return (
                    <div key={item.label} className={`nutrition-card ${catClass}`}>
                      <span className="nutr-label">{item.label}</span>
                      <span className="nutr-val">{item.val}</span>
                      {item.subval && <span className="nutr-subval">{item.subval}</span>}
                      {badgeLabel ? (
                        <span className={`nutr-badge ${catClass}`}>{badgeLabel}</span>
                      ) : (
                        !item.subval && <span className="nutr-badge dash">-</span>
                      )}
                      <span className="nutr-percent">{item.percent}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar: Ingredients */}
        <aside className="ingredients-card">
          <h2>
            <BsListTask className="ingredients-icon" />
            Ingredients
          </h2>

          <ul className="ingredients-list">
            {recipe.extendedIngredients?.map((ing) => (
              <li key={ing.original}>{ing.original}</li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Related Recipes Section — only shown when API returns data */}
      {related.length > 0 && (
      <section className="related-recipes-section">
        <div className="related-recipes-header">
          <div>
            <h2 className="related-title">Related Recipes</h2>
            <p className="related-subtitle">You might also like these dishes</p>
          </div>
          {relatedLimit < related.length && related.length > 3 && (
            <button className="see-more-btn" onClick={handleSeeMoreRelated}>
              See more recipes
            </button>
          )}
        </div>

        <div className="related-recipes-grid">
          {related.slice(0, relatedLimit).map((item) => (
            <RecipeCard
              key={item.id}
              recipe={{
                id: item.id,
                title: item.title,
                image:
                  item.image ||
                  `https://spoonacular.com/recipeImages/${item.id}-556x370.jpg`,
                meal: item.meal ||
                  (item.dishTypes && item.dishTypes.length > 0
                    ? item.dishTypes[0]
                    : "Main Meal"),
                people: item.servings || item.people || 4,
                time:
                  item.time ||
                  (item.readyInMinutes
                    ? item.readyInMinutes + " Minutes"
                    : "30 Minutes"),
              }}
            />
          ))}
        </div>
      </section>
      )}
    </article>
  );
};
