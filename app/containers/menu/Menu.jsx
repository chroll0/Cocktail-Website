"use client";
import React, { useEffect, useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [data, setData] = useState([]); // Define data as a state variable
  const [hoveredItemId, setHoveredItemId] = useState(null); // Track the hovered item

  async function fetchData() {
    const axios = require("axios");
    const options = {
      method: "GET",
      url: "https://the-cocktail-db.p.rapidapi.com/search.php",
      params: { s: "vodka" },
      headers: {
        "X-RapidAPI-Key": "a74433de9cmsha59eff66697f209p1e9638jsn7d6983ba80d1",
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      const drinks = response.data.drinks;
      setData(drinks); // Set the data state variable with the fetched drinks
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(); // Fetch data when the component is mounted
  }, []);

  const handleItemHover = (itemId) => {
    setHoveredItemId(itemId);
  };

  useEffect(() => {
    // Define the event listener function
    const handleScroll = () => {
      const elementToAnimate = document.getElementById("menu");
      const scrollPosition = window.scrollY;
      const elementHeight = elementToAnimate.offsetHeight;
      // Calculate the threshold as a fraction (e.g., 0.2) of the element's height
      const thresholdFraction = 0.05; // Adjust this value as needed
      // Calculate the threshold based on the element's height
      const threshold = elementHeight * thresholdFraction;

      if (scrollPosition > threshold) {
        elementToAnimate.classList.remove("hide-elements");
        elementToAnimate.classList.add("animate__fadeInUp");
      } else {
        elementToAnimate.classList.remove("animate__fadeInUp");
        elementToAnimate.classList.add("hide-elements");
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="menu"
      className="secondary-class-container hide-elements animate__animated"
    >
      <div className="menu-content ">
        <h2>Our menu</h2>
        <p className="menu-statement">make your choice</p>
        <div className="cocktails-container">
          {data.map((cocktail) => (
            <div
              className={`cocktails-information animate__animated ${
                hoveredItemId === cocktail.idDrink ? "animate__headShake" : ""
              }`}
              key={cocktail.idDrink}
              onMouseEnter={() => handleItemHover(cocktail.idDrink)}
              onMouseLeave={() => handleItemHover(null)}
            >
              <h3>{cocktail.strDrink}</h3>
              <span>{cocktail.strCategory}</span>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <span>Description</span>
              <p>{cocktail.strInstructions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
