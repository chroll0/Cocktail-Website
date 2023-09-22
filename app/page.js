import React from "react";
import "animate.css";

import NavBar from "./components/NavBar";
import AboutUs from "./containers/aboutUs/AboutUs";
import Menu from "./containers/menu/Menu";
import Gallery from "./containers/gallery/Gallery";
import Contact from "./containers/contact/Contact";
import CocktailPrice from "./components/CocktailPrice";

export default function Home() {
  return (
    <main>
      <NavBar />
      <AboutUs />
      <Menu />
      <CocktailPrice />
      <Gallery />
      <Contact />
    </main>
  );
}
