import { SiMealie } from "react-icons/si";
import { FaClock } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { RecipeCard } from "../components/RecipeCard";

import "../css/detail.css";

const relatedRecipes = [
  {
    id: 101,
    title: "Pork and fennel traybake",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    description:
      "These succulent pork tenderloins, served on a bed of vegetables, create a really tasty meal that can be enjoyed by all.",
  },
  {
    id: 102,
    title: "Slow-cooked beef pie",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600",
    description:
      "Ready-made pies can be high in salt, but this one is low in salt and packed with rich flavour. Cooked slowly for deliciously tender beef and topped with crispy mash.",
  },
  {
    id: 103,
    title: "Vegetable stir-fry with tofu & noodles",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    description:
      "This quick and easy vegetarian stir-fry is ideal for a healthy mid-week meal. Try using dry sherry in place of some of the apple juice or stock, if you like.",
  },
];

export const Detail = () => {
  return (
    <article className="detail-page">
      {/* Hero Header */}
      <section className="detail-hero">
        <div className="hero-content">
          <div className="detail-content">
            <span className="detail-tag">EAT WELL</span>

            <h1 className="detail-title">
              Strawberry and chocolate beetroot cake
            </h1>

            <p className="detail-description">
              Try our indulgent yet heart-healthy chocolate, strawberry and
              beetroot cake - perfect for parties and bake sales!
            </p>

            {/* Add to Favourites button */}
            <button className="detail-fav-btn">
              <FaRegHeart className="detail-fav-icon" />
              Add to Favourites
            </button>
          </div>

          <div className="detail-image">
            <img
              src="https://img.spoonacular.com/recipes/716429-556x370.jpg"
              alt="Strawberry and chocolate beetroot cake"
            />
          </div>
        </div>

        {/* Recipe Summary Meta Bar */}
        <div className="recipe-summary">
          <div className="summary-item">
            <SiMealie className="summary-icon" />
            <span className="summary-label">Meal type:</span>
            <strong className="summary-val">Dessert</strong>
          </div>

          <span className="summary-divider">|</span>

          <div className="summary-item">
            <MdOutlinePeopleAlt className="summary-icon" />
            <span className="summary-label">Serves:</span>
            <strong className="summary-val">16</strong>
          </div>

          <span className="summary-divider">|</span>

          <div className="summary-item">
            <FaClock className="summary-icon" />
            <span className="summary-label">Total time:</span>
            <strong className="summary-val">1 hour 5 minutes</strong>
          </div>

          <span className="summary-dot">•</span>

          <div className="summary-item sub-time">
            <span className="summary-label">Preparation:</span>
            <strong className="summary-val">25 minutes</strong>
          </div>

          <span className="summary-dot">•</span>

          <div className="summary-item sub-time">
            <span className="summary-label">Cook:</span>
            <strong className="summary-val">40 minutes</strong>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="detail-body">
        {/* Left Content Area */}
        <div className="detail-left">
          <section className="detail-section instructions-section">
            <ol className="instruction-list">
              <li>
                In a large mixing bowl, whisk together the soft brown sugar,
                rapeseed oil and eggs using a balloon whisk for 2 minutes.
              </li>
              <li>
                Sift in the flour and cocoa powder and fold in along with the
                beetroot.
              </li>
              <li>
                Put 8 of the smallest strawberries aside and blitz the rest to a
                puree. Fold into the cake mixture.
              </li>
              <li>
                Spoon into prepared tin, level the top with the back of a spoon
                or palette knife and bake for 35 to 40 minutes, until springy to
                the touch. A metal skewer, when inserted into the centre at a
                slight angle, should come out clean.
              </li>
              <li>
                Remove from the oven and carefully transfer to a wire rack to
                cool.
              </li>
              <li>
                Once cool, gently mix together the soft cheese, icing sugar and
                colouring. Don't overmix or it will become runny. Transfer to a
                disposable plastic piping bag, snip the end off and drizzle
                randomly over the tray bake. Cut into 16 bars.
              </li>
              <li>
                Halve the remaining strawberries and place a half on top of each
                bar.
              </li>
            </ol>
          </section>

          {/* Cook's Tips */}
          <section className="detail-section tips-section">
            <h2>Cook's tips</h2>
            <ul className="tips-list">
              <li>
                When preparing beetroot, wear disposable gloves to stop your
                hands getting stained and rub your chopping board with a cut
                lemon to help remove stains.
              </li>
            </ul>
          </section>

          {/* Nutritional Information */}
          <section className="detail-section nutrition-section">
            <div className="nutrition-container">
              <h2>Nutritional Information</h2>
              <p className="nutrition-subtitle">Each Portion Contains:</p>

              <div className="nutrition-cards">
                <div className="nutrition-card neutral">
                  <span className="nutr-label">Energy</span>
                  <span className="nutr-val">898kJ</span>
                  <span className="nutr-subval">215kcal</span>
                  <span className="nutr-percent">11%</span>
                </div>

                <div className="nutrition-card neutral">
                  <span className="nutr-label">Carbs</span>
                  <span className="nutr-val">27.3g</span>
                  <span className="nutr-badge dash">-</span>
                </div>

                <div className="nutrition-card medium">
                  <span className="nutr-label">Fat</span>
                  <span className="nutr-val">10g</span>
                  <span className="nutr-badge medium">Medium</span>
                  <span className="nutr-percent">14%</span>
                </div>

                <div className="nutrition-card low">
                  <span className="nutr-label">Saturates</span>
                  <span className="nutr-val">1.2g</span>
                  <span className="nutr-badge low">Low</span>
                  <span className="nutr-percent">6%</span>
                </div>

                <div className="nutrition-card medium">
                  <span className="nutr-label">Sugar</span>
                  <span className="nutr-val">16g</span>
                  <span className="nutr-badge medium">Medium</span>
                  <span className="nutr-percent">18%</span>
                </div>

                <div className="nutrition-card low">
                  <span className="nutr-label">Salt</span>
                  <span className="nutr-val">0.23g</span>
                  <span className="nutr-badge low">Low</span>
                  <span className="nutr-percent">4%</span>
                </div>
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
            <li>200g (7oz) light soft brown sugar</li>
            <li>140ml rapeseed (vegetable) oil</li>
            <li>3 medium eggs</li>
            <li>200g (7oz) self-raising flour</li>
            <li>25g (0.88oz) cocoa powder</li>
            <li>300g (10.5oz) raw beetroot, peeled and grated</li>
            <li>300g (10.5oz) strawberries, hulled</li>
            <li>100g (3.5oz) low-fat soft cheese</li>
            <li>1 tbsp icing sugar</li>
            <li>2 to 3 drops red or pink food colouring</li>
          </ul>
        </aside>
      </section>

      {/* Related Recipes Section */}
      <section className="related-recipes-section">
        <div className="related-recipes-header">
          <div>
            <h2 className="related-title">Related Recipes</h2>
          </div>
          <button className="see-more-btn">See more recipes</button>
        </div>

        <div className="related-recipes-grid">
          {relatedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </article>
  );
};
