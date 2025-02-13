import carrotUrl from "../assets/images/carrot.svg";
import menuOpenUrl from "../assets/images/menu-open.svg";
import Menu from "./Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((m) => !m);
  }

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={carrotUrl} className="carrot-logo" />
        </Link>
        <button onClick={toggleMenu}>
          <img src={menuOpenUrl} />
        </button>
      </nav>
      {menuOpen && <Menu handleClick={toggleMenu} />}
    </header>
  );
}
