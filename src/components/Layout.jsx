import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import { useState, useEffect } from "react";

export default function Layout() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
  }

  useEffect(() => {
    setLoading(true);

    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);
      setTimeout(() => setLoading(false), remainingTime);
    };

    let allImages = [];
    let imagesLoaded = 0;

    setTimeout(() => {
      allImages = document.querySelectorAll("img");

      allImages.forEach((image) => {
        if (image.complete) {
          imagesLoaded += 1;
        } else {
          image.addEventListener("load", () => {
            imagesLoaded += 1;
            if (imagesLoaded === allImages.length) {
              handleLoad();
            }
          });
        }
      });

      if (imagesLoaded === allImages.length) {
        handleLoad();
      }
    }, 1000);

    return () => {
      allImages.forEach((image) => {
        image.removeEventListener("load", handleLoad);
      });
    };
  }, [location.pathname, location.key]);

  return (
    <>
      {loading && <Loader />}
      <Header isScrolled={isScrolled} />
      <div className="wrapper">
        <Outlet context={{ isScrolled, loading }} />
      </div>
      <Footer />
    </>
  );
}
