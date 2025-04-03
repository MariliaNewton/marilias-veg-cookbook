import browseBgUrl from "../assets/images/browse-recipes-bg.svg";
import browseLinkUrl from "../assets/images/browse-link.svg";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function BrowseSection() {
  return (
    <section className="browse-section">
      <img src={browseBgUrl} alt="" />
      <div>
        <h2>
          <span>BROWSE FOR RECIPE COLLECTIONS</span>
        </h2>
        <div className="browse-row-container">
          <div className="browse-row">
            <AnimatedLink section={"lunch"} />
            <div className="separation-dots"></div>

            <AnimatedLink section={"breakfast"} />
            <div className="separation-dots"></div>

            <AnimatedLink section={"diner"} />
          </div>
          <div className="browse-row">
            <AnimatedLink section={"vegan"} />
            <div className="separation-dots"></div>

            <AnimatedLink section={"healthy"} />
          </div>
          <div className="browse-row">
            <AnimatedLink section={"japanese"} />
            <div className="separation-dots"></div>

            <AnimatedLink section={"french"} />
            <div className="separation-dots"></div>

            <AnimatedLink section={"brazilian"} />
          </div>
        </div>
        <motion.div
          whileHover={{
            scale: 1.05,
            rotateZ: [3, -3, 3, -3, 3, -3, 0],
            transition: {
              duration: 0.5,
            },
          }}
          style={{ rotateZ: 0 }}
        >
          <Link to="/recipes?filter=all" className="browse-section-link">
            ALL RECIPES <img src={browseLinkUrl} alt="" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedLink({ section }) {
  const [isHovered, setIsHovered] = useState(false);
  const sectionLower = section.toLowerCase();
  const sectionUpper = section.toUpperCase();
  return (
    <motion.div
      variants={{
        hover: {},
        rest: {},
      }}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="link-animation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={{
          hover: {
            y: "-100%",
            scale: 0.8,
          },
          rest: {
            y: "0%",
            scale: 1,
          },
        }}
      >
        <Link to={`/recipes?filter=${sectionLower}`}>{sectionUpper}</Link>
      </motion.div>

      <motion.div
        variants={{
          rest: {
            y: "0%",
            scale: 0.8,
          },
          hover: {
            y: "-100%",
            scale: 1,
          },
        }}
        className="second-link"
      >
        <Link to={`/recipes?filter=${sectionLower}`}>{sectionUpper}</Link>
      </motion.div>
    </motion.div>
  );
}
