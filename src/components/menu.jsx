import menuBgUrl from "../assets/images/menu-bg.svg";
import closeMenuUrl from "../assets/images/close-menu.svg";
import { Link } from "react-router-dom";

export default function Menu({ handleClick }) {
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
        <Link to="/recipes/?filter=all" onClick={handleClick}>
          All recipes
        </Link>
        <Link to="/recipes/?filter=main" onClick={handleClick}>
          Main dishes
        </Link>
        <Link to="/recipes/?filter=breakfast" onClick={handleClick}>
          Breakfast
        </Link>
        <Link to="/recipes/?filter=sweet" onClick={handleClick}>
          Sweet
        </Link>
        <Link to="/recipes/?filter=vegan" onClick={handleClick}>
          Vegan
        </Link>
      </div>
    </div>
  );
}
