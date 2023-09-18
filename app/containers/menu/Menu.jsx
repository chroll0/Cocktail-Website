"use client";
import React, { useEffect, useState } from "react";

import "./Menu.css";

const Menu = () => {
  const [data, setData] = useState([]); // Define data as a state variable
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

  return (
    <div id="menu" className="secondary-class-container">
      <div className="menu-content">
        <h2>Our menu</h2>
        <p className="menu-statement">make your choice</p>
        <div className="cocktails-container">
          {data.map((cocktail) => (
            <div className="cocktails-information" key={cocktail.idDrink}>
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
