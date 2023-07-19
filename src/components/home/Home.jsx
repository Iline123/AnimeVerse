import React from "react";
import Hero from "./hero/hero";
import AboutCard from "../about/AboutCard";

import Shop from "..//allcategories/Shop"
import CategoriesCard from "../allcategories/CategoriesCard";
const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <CategoriesCard />
     <Shop />
    </>
  );
};

export default Home;
