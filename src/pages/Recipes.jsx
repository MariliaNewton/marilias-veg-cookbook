import { useState, useEffect } from "react";
import { fetchRecipes } from "../utils/fetchFunctions";
import { Link } from "react-router-dom";

export default function Recipes() {
  const [recipesList, setRecipesList] = useState([]);
  const search = null;

  useEffect(() => {
    async function loadRecipes() {
      const data = await fetchRecipes();
      setRecipesList(data);
    }
    loadRecipes();
  }, []);

  return (
    <div className="filtered-recipes-page">
      <h1>
        {(search && `RESULTS FOR: "${search.toUpperCase()}"`) || "ALL RECIPES"}
      </h1>
      <div>
        {recipesList.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`${recipe.id}`}>
              <img src={recipe.imageUrl} alt="" />
              <h2>{recipe.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
