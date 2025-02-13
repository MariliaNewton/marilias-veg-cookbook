import Cover from "../components/Cover";
import AboutMe from "../components/About";
import LatestRecipes from "../components/LatestRecipes";
import Sign from "../components/Sign";
import BrowseSection from "../components/BrowseSection";

export default function Home() {
  return (
    <>
      <Cover />
      <AboutMe />
      <LatestRecipes />
      <Sign />
      <BrowseSection />
    </>
  );
}
