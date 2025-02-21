import carrotUrl from "../assets/images/carrot.svg";
import menuOpenUrl from "../assets/images/menu-open.svg";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isScrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  function toggleMenu() {
    setMenuOpen((m) => !m);
  }

  return (
    <header className={isScrolled ? "scrolled" : ""}>
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
