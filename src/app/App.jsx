import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Recipe from "../pages/Recipe";
import Layout from "../components/Layout";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect, useEffect, useState, useContext } from "react";

function App() {
  function Wrapper({ children }) {
    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname, location.key]);

    return children;
  }
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
