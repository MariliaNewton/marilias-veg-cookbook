import previousUrl from "../assets/images/previous.svg";
import nextUrl from "../assets/images/next.svg";

export default function LatestRecipes() {
  const testFetchLatestRecipes = [
    {
      id: 1,
      name: "Fake meat ragu & polenta",
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
        {testFetchLatestRecipes.map((recipe) => (
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
