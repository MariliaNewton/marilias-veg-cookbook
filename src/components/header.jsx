import carrotUrl from "../assets/images/carrot.svg";
import menuOpenUrl from "../assets/images/menu-open.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <a>
          <img src={carrotUrl} className="carrot-logo" />
        </a>
        <a>
          <img src={menuOpenUrl} />
        </a>
      </nav>
    </header>
  );
}
