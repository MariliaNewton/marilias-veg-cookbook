import menuBgUrl from "../assets/images/menu-bg.svg";
import closeMenuUrl from "../assets/images/close-menu.svg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function Menu({ handleClick }) {
  const navigate = useNavigate();

  function manualSearch(formData) {
    const searchQuery = formData.get("search").trim();
    if (searchQuery) {
      navigate(`/recipes/?filter=${encodeURIComponent(searchQuery)}`);
    }
  }

  return (
    <div className="menu">
      <img src={menuBgUrl} alt="" />
      <div>
        <button onClick={handleClick}>
          <img src={closeMenuUrl} alt="" />
        </button>
        <form action={manualSearch} className="menu-search">
          <input type="text" name="search" id="" />
        </form>

        <motion.div
          initial={{ y: -95, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -95, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/recipes/?filter=all" onClick={handleClick}>
            All recipes
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: -95, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -95, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link to="/recipes/?filter=main" onClick={handleClick}>
            Main dishes
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: -95, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -95, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/recipes/?filter=breakfast" onClick={handleClick}>
            Breakfast
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: -95, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -95, opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link to="/recipes/?filter=sweet" onClick={handleClick}>
            Sweet
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: -95, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -95, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/recipes/?filter=vegan" onClick={handleClick}>
            Vegan
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
