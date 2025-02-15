import recipeHeaderBgUrl from "../assets/images/recipe-header-bg.svg";
import recipeTime from "../assets/images/time.svg";
import recipeServings from "../assets/images/servings.svg";
import { fetchRecipe } from "../utils/fetchFunctions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadRecipe() {
      const rec = await fetchRecipe(id);
      rec && setRecipe(rec);
    }
    loadRecipe();
  }, []);

  return (
    <>
      {recipe && (
        <>
          <div className="recipe-page-top">
            <img src={recipe.imageUrl} alt="" />
            <div>
              <img src={recipeHeaderBgUrl} alt=""></img>
              <h1>{recipe.name}</h1>
            </div>
          </div>
          <div className="recipe-page-bottom">
            <div className="recipe-page-bottom-left">
              <div>
                <div className="recipe-time">
                  <img src={recipeTime} alt="" />
                  <div>
                    <p>Time</p>
                    <span>{recipe.time}</span>
                  </div>
                </div>
                <div className="recipe-servings">
                  <img src={recipeServings} alt="" />
                  <div>
                    <p>Yield</p>
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>
              </div>
              <div className="recipe-page-ingredients">
                <h2>Ingredients</h2>
                <ul>
                  {recipe.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="recipe-page-bottom-right">
              <h2>Instructions</h2>
              <ol>
                {recipe.instructions.map((ins, index) => (
                  <li key={index}>{ins}</li>
                ))}
              </ol>
            </div>
          </div>
        </>
      )}
    </>
  );
}
