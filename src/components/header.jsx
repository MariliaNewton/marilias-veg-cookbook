import carrotUrl from "../assets/images/carrot.svg";
import menuOpenUrl from "../assets/images/menu-open.svg";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

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
        <motion.div
          whileHover={{
            scale: [1, 1.1],
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 1,
            },
          }}
          initial={{ scale: 1 }}
        >
          <Link to="/">
            <img src={carrotUrl} className="carrot-logo" />
          </Link>
        </motion.div>

        <motion.button
          whileHover={{
            scale: [1, 1.15],
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 1,
            },
          }}
          initial={{ scale: 1 }}
          onClick={toggleMenu}
        >
          <img src={menuOpenUrl} />
        </motion.button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: 450, y: -180 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ x: 450, y: -180 }}
            transition={{ duration: 0.2 }}
            style={{ position: "fixed", top: 0, right: 0 }}
          >
            <Menu handleClick={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
