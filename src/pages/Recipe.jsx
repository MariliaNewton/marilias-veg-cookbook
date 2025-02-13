import recipeHeaderBgUrl from "../assets/images/recipe-header-bg.svg";
import recipeTime from "../assets/images/time.svg";
import recipeServings from "../assets/images/servings.svg";

export default function Recipe() {
  const testFetchRecipe = {
    id: 1,
    name: "Fake Meat Ragu & Polenta",
    category: "main",
    imageUrl: "/testLatestRecipes/fakeMeatRagu.jpg",
    time: "45 min",
    servings: 3,
    tags: ["vegan", "comfort food", "gluten-free"],
    difficulty: "Easy",
    ingredients: [
      "200g plant-based ground meat",
      "1 small onion, finely chopped",
      "2 cloves garlic, minced",
      "1 carrot, finely diced",
      "1 celery stalk, finely diced",
      "400g canned crushed tomatoes",
      "1 tbsp tomato paste",
      "1/2 cup vegetable broth",
      "1 tsp dried oregano",
      "1 tsp dried basil",
      "1/2 tsp red pepper flakes (optional)",
      "Salt and black pepper, to taste",
      "2 tbsp olive oil",
      "1/2 cup polenta",
      "2 cups water or vegetable broth",
      "1 tbsp butter or plant-based alternative",
      "1/4 cup grated parmesan or nutritional yeast",
    ],
    instructions: [
      "Heat 1 tbsp of olive oil in a pan over medium heat.",
      "Add the onion, garlic, carrot, and celery, and sauté until softened, about 5 minutes.",
      "Add the plant-based ground meat and cook until browned, breaking it apart with a spoon.",
      "Stir in the tomato paste, crushed tomatoes, vegetable broth, oregano, basil, red pepper flakes, salt, and black pepper.",
      "Simmer for 20-25 minutes, stirring occasionally, until the sauce thickens.",
      "While the sauce is cooking, prepare the polenta: bring 2 cups of water or vegetable broth to a boil.",
      "Slowly whisk in the polenta, stirring constantly to prevent lumps.",
      "Reduce heat to low and cook, stirring frequently, for about 10 minutes until thick and creamy.",
      "Stir in the butter and grated parmesan or nutritional yeast, then remove from heat.",
      "Serve the polenta in bowls, topped with the fake meat ragu.",
      "Garnish with fresh basil or extra parmesan, if desired.",
    ],
  };

  return (
    <>
      <div className="recipe-page-top">
        <img src={testFetchRecipe.imageUrl} alt="" />
        <div>
          <img src={recipeHeaderBgUrl} alt=""></img>
          <h1>Fake meat ragu & polenta</h1>
        </div>
      </div>
      <div className="recipe-page-bottom">
        <div className="recipe-page-bottom-left">
          <div>
            <div className="recipe-time">
              <img src={recipeTime} alt="" />
              <div>
                <p>Time</p>
                <span>{testFetchRecipe.time}</span>
              </div>
            </div>
            <div className="recipe-servings">
              <img src={recipeServings} alt="" />
              <div>
                <p>Yield</p>
                <span>{testFetchRecipe.servings} servings</span>
              </div>
            </div>
          </div>
          <div className="recipe-page-ingredients">
            <h2>Ingredients</h2>
            <ul>
              {testFetchRecipe.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="recipe-page-bottom-right">
          <h2>Instructions</h2>
          <ol>
            {testFetchRecipe.instructions.map((ins, index) => (
              <li key={index}>{ins}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
