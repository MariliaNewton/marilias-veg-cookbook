import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Recipes from "../pages/Recipes";
import Recipe from "../pages/Recipe";
// import Menu from "../components/Menu";
import Layout from "../components/Layout";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      // Scroll to the top of the page when the route or key changes
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname, location.key]);

    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="recipes/:id" element={<Recipe />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
