import { MdHistory, MdDeleteOutline } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";
import { useRecent } from "../context/recentContext";

import "../css/recent.css";

export const Recent = () => {
  const { recents, clearAll } = useRecent();
  const navigate = useNavigate();

  const isEmpty = recents.length === 0;

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
            <button className="clear-history-btn" onClick={clearAll}>
              <MdDeleteOutline />
              Clear history
            </button>
          )}
          <span className="recent-count-badge">{recents.length} Recipes</span>
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
          <button className="recent-empty-cta" onClick={() => navigate("/")}>
            <FaFire />
            Explore Recipes
          </button>
        </div>
      ) : (
        /* ── Flat grid in order ── */
        <div className="recent-grid">
          {recents.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};
