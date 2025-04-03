import mariliaUrl from "../assets/images/marilia.jpg";
import aboutBgUrl from "../assets/images/about-me-bg.svg";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";

export default function AboutMe() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section ref={sectionRef} className="about-me-section">
      <motion.div
        style={{ overflow: "hidden" }}
        className="img-about-container"
      >
        <motion.img
          style={{ y, opacity, scale }}
          ref={imgRef}
          src={mariliaUrl}
          alt=""
        />
      </motion.div>
      <div className="text-about-container">
        <img src={aboutBgUrl} alt="" className="about-me-bg" />
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={textVariants}>Hey you, welcome!</motion.h2>
          <motion.p variants={textVariants}>
            This blog is a collection of all the recipes I've gathered and
            created over the years—some healthier, some not so much—but I
            guarantee they’re all equally delicious!
          </motion.p>
          <motion.p variants={textVariants}>
            {" "}
            I've always loved to cook, and for the past three years, I’ve been
            cooking only vegetarian after meeting my lovely partner.
          </motion.p>
          <motion.p variants={textVariants}>
            {" "}
            I created this website to keep track of my recipes (I always think I
            know everything in my head—spoiler: I don’t) and to share them with
            you so you can see just how amazing vegetarian food can be!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
