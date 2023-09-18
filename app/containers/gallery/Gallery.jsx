import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div id="gallery" className="secondary-class-container gallery-content">
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
