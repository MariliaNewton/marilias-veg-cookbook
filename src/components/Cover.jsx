import { useOutletContext } from "react-router-dom";
import scrollDownUrl from "../assets/images/scroll-down.svg";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function Cover() {
  const { isScrolled, loading } = useOutletContext();
  const ref = useRef(null);

  return (
    <motion.section ref={ref} className="cover-section">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: loading ? 0 : 1,
          y: loading ? 30 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        MARILIA'S VEG COOKBOOK
      </motion.h1>
      <img
        src={scrollDownUrl}
        alt=""
        className={isScrolled ? "scrolled" : ""}
      />
    </motion.section>
  );
}
