import previousUrl from "../assets/images/previous.svg";
import nextUrl from "../assets/images/next.svg";
import { fetchRecipes } from "../utils/fetchFunctions";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function LatestRecipes() {
  const [lastRecipes, setLastRecipes] = useState([]);
  const [scrollPos, setScrollPos] = useState(0);
  const numberOfRecipesShown = 6;
  const containerRef = useRef();
  const thumbnailRef = useRef();

  useEffect(() => {
    async function loadRecipes() {
      const data = await fetchRecipes();
      setLastRecipes(data.slice(-numberOfRecipesShown));
    }
    loadRecipes();
  }, []);

  function handleScroll(direction) {
    const dir = direction === "left" ? -1 : 1;

    const scrollAmount =
      thumbnailRef.current.getBoundingClientRect().width * dir * 1.5;

    const scrollMax =
      containerRef.current.scrollWidth -
      containerRef.current.getBoundingClientRect().width;

    let newScrollPos = scrollPos + scrollAmount;

    if (newScrollPos > scrollMax) newScrollPos = scrollMax;
    if (newScrollPos < 0) newScrollPos = 0;

    containerRef.current.scrollLeft = newScrollPos;
    setScrollPos(newScrollPos);
  }

  return (
    <section className="latest-recipes-section">
      <div className="latest-recipes-top-container">
        <h2>Latest Recipes</h2>
        <div className="latest-btn-container">
          <button onClick={() => handleScroll("left")}>
            <img src={previousUrl} alt="" />
          </button>
          <button onClick={() => handleScroll("right")}>
            <img src={nextUrl} alt="" />
          </button>
        </div>
      </div>
      <div className="recipes-thumbnail-container" ref={containerRef}>
        {lastRecipes.map((recipe) => (
          <div key={recipe.id} ref={thumbnailRef}>
            <Link to={`recipes/${recipe.id}`}>
              <img src={recipe.imageUrl} alt="" />
              <h3>{recipe.name}</h3>
              <motion.div
                animate={{
                  rotateZ: [5, -5, 5, -5, 5, -5, 5, 0].map(
                    (val) => val * (recipe.id % 2 === 0 ? 1 : -1)
                  ), // Alternating shake direction
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.7,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="latest-recipes-tag"
              >
                {recipe.category.toUpperCase()}
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
