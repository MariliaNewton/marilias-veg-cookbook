import { useState, useEffect } from "react";
import { fetchRecipes } from "../utils/fetchFunctions";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "motion/react";

export default function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const categories = [
    "lunch",
    "breakfast",
    "dinner",
    "vegan",
    "healthy",
    "japanese",
    "french",
    "brazilian",
    "sweet",
    "main",
  ];

  let typeFilter = searchParams.get("filter") || "";

  if (
    typeFilter.toLowerCase() === "all" ||
    typeFilter.toLowerCase() === "all recipes"
  )
    typeFilter = "";

  useEffect(() => {
    async function loadRecipes() {
      const data = await fetchRecipes();
      setRecipes(data);
    }
    loadRecipes();
  }, []);

  const displayedRecipes = typeFilter ? filterRecipes(typeFilter) : recipes;

  function filterRecipes() {
    const search = typeFilter.toLowerCase();
    return recipes.filter(
      (rec) =>
        rec.category === search ||
        rec.name.toLowerCase().includes(search) ||
        rec.tags.some((tag) => tag.includes(search)) ||
        rec.ingredients.some((ing) => ing.includes(search))
    );
  }

  return (
    <div className="recipes-page">
      <h1>
        {typeFilter
          ? categories.some((cat) => cat === typeFilter.toLowerCase())
            ? `${typeFilter.toUpperCase()}`
            : `RESULTS FOR: "${typeFilter.toUpperCase()}"`
          : "ALL RECIPES"}
      </h1>
      {displayedRecipes.length === 0 && (
        <div className="recipes-no-results">
          <h2>It seems that I don't have any recipes for your search :(</h2>
          <h2>You can try something else or browse through the categories!</h2>
        </div>
      )}
      <div>
        {displayedRecipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`${recipe.id}`}>
              <motion.div
                style={{ overflow: "hidden" }}
                className="img-recipes-container"
              >
                <motion.img
                  whileHover={{
                    scale: 1.1,
                  }}
                  src={recipe.imageUrl}
                  alt=""
                />
              </motion.div>
              <h2>{recipe.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
