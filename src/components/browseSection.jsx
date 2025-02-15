import browseBgUrl from "../assets/images/browse-recipes-bg.svg";
import browseLinkUrl from "../assets/images/browse-link.svg";
import { Link } from "react-router-dom";

export default function BrowseSection() {
  return (
    <section className="browse-section">
      <img src={browseBgUrl} alt="" />
      <div>
        <h2>BROWSE FOR RECIPE COLLECTIONS</h2>
        <div>
          <div className="browse-row">
            <Link to="/recipes?filter=sweet">LUNCH</Link>
            <div className="separation-dots"></div>
            <Link to="/recipes?filter=breakfast">BREAKFAST</Link>
            <div className="separation-dots"></div>
            <Link to="/recipes?filter=dinner">DINNER</Link>
          </div>
          <div className="browse-row">
            <Link to="/recipes?filter=vegan">VEGAN</Link>
            <div className="separation-dots"></div>
            <Link to="/recipes?filter=healthy">HEALTHY</Link>
          </div>
          <div className="browse-row">
            <Link to="/recipes?filter=japanese">JAPANESE</Link>
            <div className="separation-dots"></div>
            <Link to="/recipes?filter=french">FRENCH</Link>
            <div className="separation-dots"></div>
            <Link to="/recipes?filter=brazilian">BRAZILIAN</Link>
          </div>
        </div>
        <Link to="/recipes?filter=all">
          ALL RECIPES <img src={browseLinkUrl} alt="" />
        </Link>
      </div>
    </section>
  );
}
