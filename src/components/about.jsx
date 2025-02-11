import mariliaUrl from "../assets/images/marilia.jpg";
import aboutBgUrl from "../assets/images/about-me-bg.svg";

export default function AboutMe() {
  return (
    <section className="about-me-section">
      <div className="img-about-container">
        <img src={mariliaUrl} alt="" />
      </div>
      <div className="text-about-container">
        <img src={aboutBgUrl} alt="" className="about-me-bg" />
        <div>
          <h2>Hey you, welcome!</h2>
          <p>
            This blog is a collection of all the recipes I've gathered and
            created over the years—some healthier, some not so much—but I
            guarantee they’re all equally delicious!
          </p>
          <p>
            {" "}
            I've always loved to cook, and for the past three years, I’ve been
            cooking only vegetarian after meeting my lovely partner.
          </p>
          <p>
            {" "}
            I created this website to keep track of my recipes (I always think I
            know everything in my head—spoiler: I don’t) and to share them with
            you so you can see just how amazing vegetarian food can be!
          </p>
        </div>
      </div>
    </section>
  );
}
