import menuBgUrl from "../assets/images/menu-bg.svg";
import closeMenuUrl from "../assets/images/close-menu.svg";
import searchMenuUrl from "../assets/images/search-menu.svg";

export default function Menu() {
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
        <button>
          <img src={closeMenuUrl} alt="" />
        </button>
        <div className="menu-search">
          <input type="text" name="" id="" />
          <button>
            <img src={searchMenuUrl} alt="" />
          </button>
        </div>
        {testFetchCategories.map((cat, index) => (
          <p key={index}>{cat}</p>
        ))}
      </div>
    </div>
  );
}
