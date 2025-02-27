import { useOutletContext } from "react-router-dom";
import scrollDownUrl from "../assets/images/scroll-down.svg";

export default function Cover() {
  const { isScrolled } = useOutletContext();
  return (
    <section className="cover-section">
      <h1>MARILIA'S VEG COOKBOOK</h1>
      <img
        src={scrollDownUrl}
        alt=""
        className={isScrolled ? "scrolled" : ""}
      />
    </section>
  );
}
