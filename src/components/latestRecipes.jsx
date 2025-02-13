import previousUrl from "../assets/images/previous.svg";
import nextUrl from "../assets/images/next.svg";
import { fetchRecipes } from "../utils/fetchFunctions";
import { useEffect, useState } from "react";

export default function LatestRecipes() {
  const [lastRecipes, setLastRecipes] = useState([]);
  const numberOfRecipesShown = 5;

  useEffect(() => {
    async function loadRecipes() {
      const data = await fetchRecipes();
      setLastRecipes(data.slice(-numberOfRecipesShown));
    }
    loadRecipes();
  }, []);

  return (
    <section className="latest-recipes-section">
      <div className="latest-recipes-top-container">
        <h2>Latest Recipes</h2>
        <div className="latest-btn-container">
          <button>
            <img src={previousUrl} alt="" />
          </button>
          <button>
            <img src={nextUrl} alt="" />
          </button>
        </div>
      </div>
      <div className="recipes-thumbnail-container">
        {lastRecipes.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.imageUrl} alt="" />
            <h3>{recipe.name}</h3>
            <div className="latest-recipes-tag">
              {recipe.category.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
