"use client";
import React, { useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    // Define the event listener function
    const handleScroll = () => {
      const elementToAnimate = document.getElementById("gallery");
      const threshold = 2300; // Adjust this value as needed
      const scrollPosition = window.scrollY;

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
      id="gallery"
      className="gallery-content animate__animated hide-elements"
    >
      <h2>gallery</h2>
      <div className="images-box">
        <div className="hover-styles">
          <img src="/smoking.png" alt="smoking" />
          <div className="change-color"></div>
        </div>
        <div className="hover-styles">
          <img src="/burger.png" alt="burger" />
          <div className="change-color"></div>
        </div>
        <div className="hover-styles">
          <img src="/chilim.png" alt="chilim" />
          <div className="change-color"></div>
        </div>
        <div className="hover-styles">
          <img src="/cocktail-making.png" alt="cocktail-making" />
          <div className="change-color"></div>
        </div>
        <div className="hover-styles">
          <img src="/fire.png" alt="fire" />
          <div className="change-color"></div>
        </div>
        <div className="hover-styles">
          <img src="/steak.png" alt="steak" />
          <div className="change-color"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
