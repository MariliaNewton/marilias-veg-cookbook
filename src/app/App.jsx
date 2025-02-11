import Header from "../components/header";
import Cover from "../components/cover";
import AboutMe from "../components/about";
import LatestRecipes from "../components/latestRecipes";
import Sign from "../components/sign";
import BrowseSection from "../components/browseSection";
import Footer from "../components/footer";
import FilteredRecipesPage from "../components/filteredRecipesPage";
import RecipePage from "../components/recipePage";
import Menu from "../components/menu";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className="wrapper">
        <Cover />
        <AboutMe />
        <LatestRecipes />
        <Sign />
        <BrowseSection />
        {/* <FilteredRecipesPage /> */}
        {/* <RecipePage /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
