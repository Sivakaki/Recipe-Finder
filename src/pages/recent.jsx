import { MdHistory, MdDeleteOutline } from "react-icons/md";
import { FaClock, FaFire } from "react-icons/fa6";
import { RecipeCard } from "../components/RecipeCard";

import "../css/recent.css";

/* ─── Static placeholder data (replace with real state/context later) ─── */
const recentRecipes = [
  {
    id: 1,
    title: "Chicken Fry",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600",
    description:
      "Crispy golden chicken pieces seasoned with aromatic spices — a crowd-pleasing classic ready in 20 minutes.",
    meal: "Main Meal",
    people: 4,
    time: "20 Minutes",
    viewedAt: "2 minutes ago",
  },
  {
    id: 2,
    title: "Pasta Alfredo",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
    description:
      "Silky cream sauce tossed with al-dente pasta and freshly grated parmesan. Simple, rich, and utterly satisfying.",
    meal: "Dinner",
    people: 2,
    time: "30 Minutes",
    viewedAt: "1 hour ago",
  },
  {
    id: 3,
    title: "Veg Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    description:
      "A juicy, flavour-packed vegetable patty stacked with fresh toppings and a brioche bun — the ultimate veggie burger.",
    meal: "Snack",
    people: 1,
    time: "15 Minutes",
    viewedAt: "3 hours ago",
  },
  {
    id: 4,
    title: "Fluffy Pancakes",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
    description:
      "Light, airy breakfast pancakes with a golden crust. Perfect with maple syrup, fresh berries, or a dollop of cream.",
    meal: "Breakfast",
    people: 3,
    time: "25 Minutes",
    viewedAt: "Yesterday",
  },
  {
    id: 5,
    title: "Pizza Margherita",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    description:
      "Classic Neapolitan pizza with a thin, crispy crust topped with fresh tomatoes, mozzarella and fragrant basil.",
    meal: "Dinner",
    people: 5,
    time: "40 Minutes",
    viewedAt: "Yesterday",
  },
  {
    id: 6,
    title: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600",
    description:
      "Crisp romaine lettuce tossed with a tangy caesar dressing, crunchy croutons and shaved parmesan.",
    meal: "Lunch",
    people: 2,
    time: "15 Minutes",
    viewedAt: "2 days ago",
  },
];

/* ── Group recipes by viewedAt label ── */
const groupByDate = (recipes) => {
  const groups = {};
  recipes.forEach((r) => {
    const key = r.viewedAt;
    if (!groups[key]) groups[key] = [];
    groups[key].push(r);
  });
  return groups;
};

export const Recent = () => {
  const isEmpty = recentRecipes.length === 0;
  const grouped = groupByDate(recentRecipes);

  return (
    <div className="recent-page">
      {/* ── Page Header ── */}
      <header className="recent-header">
        <div className="recent-heading-group">
          <h1 className="recent-title">
            <MdHistory className="recent-title-icon" />
            Recently Viewed
          </h1>
          <p className="recent-subtitle">
            Pick up where you left off — your browsing history at a glance.
          </p>
        </div>

        <div className="recent-header-actions">
          {!isEmpty && (
            <button className="clear-history-btn">
              <MdDeleteOutline />
              Clear history
            </button>
          )}
          <span className="recent-count-badge">
            {recentRecipes.length} Recipes
          </span>
        </div>
      </header>

      {isEmpty ? (
        /* ── Empty State ── */
        <div className="recent-empty">
          <span className="recent-empty-icon">
            <MdHistory />
          </span>
          <h2 className="recent-empty-title">No history yet</h2>
          <p className="recent-empty-desc">
            Recipes you view will appear here so you can easily find them again.
          </p>
          <button className="recent-empty-cta">
            <FaFire />
            Explore Recipes
          </button>
        </div>
      ) : (
        <div className="recent-groups">
          {Object.entries(grouped).map(([label, recipes]) => (
            <div key={label} className="recent-group">
              {/* ── Time group label ── */}
              <div className="recent-group-label">
                <FaClock className="group-label-icon" />
                <span>{label}</span>
              </div>

              {/* ── Cards grid ── */}
              <div className="recent-grid">
                {recipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
