import browseBgUrl from "../assets/images/browse-recipes-bg.svg";
import browseLinkUrl from "../assets/images/browse-link.svg";

export default function BrowsSection() {
  return (
    <section className="browse-section">
      <img src={browseBgUrl} alt="" />
      <div>
        <h2>BROWSE FOR RECIPE COLLECTIONS</h2>
        <div>
          <div className="browse-row">
            <a href="">SWEET</a>
            <div className="separation-dots"></div>
            <a href="">DINNER</a>
            <div className="separation-dots"></div>
            <a href="">BREAKFAST</a>
          </div>
          <div className="browse-row">
            <a href="">LUNCH</a>
            <div className="separation-dots"></div>
            <a href="">HEALTHY</a>
          </div>
          <div className="browse-row">
            <a href="">SUSHI</a>
            <div className="separation-dots"></div>
            <a href="">DINNER</a>
            <div className="separation-dots"></div>
            <a href="">BRAZILIAN</a>
          </div>
        </div>
        <a href="">
          ALL RECIPES <img src={browseLinkUrl} alt="" />
        </a>
      </div>
    </section>
  );
}
