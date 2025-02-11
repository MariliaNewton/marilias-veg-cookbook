export default function FilteredRecipesPage() {
  const testFetchLatestRecipes = [
    {
      id: 1,
      name: "Fake meat ragu & polentaaa",
      category: "main",
      imageUrl: "/testLatestRecipes/fakeMeatRagu.jpg",
    },
    {
      id: 2,
      name: "Lentil Red Curry",
      category: "dinner",
      imageUrl: "/testLatestRecipes/lentilRedCurry.jpg",
    },
    {
      id: 3,
      name: "Soja in Tomato Sauce",
      category: "main",
      imageUrl: "/testLatestRecipes/sojaMeatSauce.jpg",
    },
    {
      id: 4,
      name: "Lentil Red Curry",
      category: "main",
      imageUrl: "/testLatestRecipes/lentilRedCurry.jpg",
    },
    {
      id: 5,
      name: "Fake meat ragu & polenta",
      category: "main",
      imageUrl: "/testLatestRecipes/fakeMeatRagu.jpg",
    },
  ];
  return (
    <div className="filtered-recipes-page">
      <h1>ALL RECIPES</h1>
      <div>
        {testFetchLatestRecipes.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.imageUrl} alt="" />
            <h2>{recipe.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
