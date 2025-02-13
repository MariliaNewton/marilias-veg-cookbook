import menuBgUrl from "../assets/images/menu-bg.svg";
import closeMenuUrl from "../assets/images/close-menu.svg";
import searchMenuUrl from "../assets/images/search-menu.svg";
import { Link } from "react-router-dom";

export default function Menu({ handleClick, ref }) {
  const testFetchCategories = [
    "All",
    "Breakfast",
    "Dinner",
    "Sweet",
    "Protein",
  ];

  return (
    <div className="menu">
      <img src={menuBgUrl} alt="" />
      <div>
        <button onClick={handleClick}>
          <img src={closeMenuUrl} alt="" />
        </button>
        <div className="menu-search">
          <input type="text" name="" id="" />
        </div>
        <Link to="/recipes" onClick={handleClick}>
          All recipes
        </Link>
        <Link to="/recipes" onClick={handleClick}>
          Main dishes
        </Link>
        <Link to="/recipes" onClick={handleClick}>
          Breakfast
        </Link>
        <Link to="/recipes" onClick={handleClick}>
          Sweet
        </Link>
        <Link to="/recipes" onClick={handleClick}>
          Vegan
        </Link>
      </div>
    </div>
  );
}
