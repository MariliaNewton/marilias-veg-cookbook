import menuBgUrl from "../assets/images/menu-bg.svg";
import closeMenuUrl from "../assets/images/close-menu.svg";
import { Link, useNavigate } from "react-router-dom";

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
