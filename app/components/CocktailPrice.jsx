import "./CocktailPrice.css";
const CocktailPrice = () => {
  return (
    <div className="secondary-class-container cocktail-container">
      <div className="overlay"></div>
      <div className="cocktail-content">
        <span>Hunter's Menu</span>
        <h2>Try One of Our Cocktails and get pleasure</h2>
        <p>
          The flavors of our international inspired menu are based on fresh,
          wholesome, and unique ingredients. Find dishes fortified with fresh
          spices, vegetables, seafood, and meat.
        </p>
        <div className="cocktail-wrapper">
          <div className="cocktail-box">
            <div className="cocktail-price">
              <p>Blue Dew</p>
              <div className="line"></div>
              <span>$21.00</span>
            </div>
            <p>A blend of blueberry and honeydew melon</p>
          </div>
          <div className="cocktail-box">
            <div className="cocktail-price">
              <p>Pina Colada</p>
              <div className="line"></div>
              <span>$23.00</span>
            </div>
            <p>Pineapple and coconut with vanilla overtones</p>
          </div>
          <div className="cocktail-box">
            <div className="cocktail-price">
              <p>Geisha</p>
              <div className="line"></div>
              <span>$26.00</span>
            </div>
            <p>Smooth notes of peach with a hint of minty “mist”</p>
          </div>
          <div className="cocktail-box">
            <div className="cocktail-price">
              <p>Irish Peach</p>
              <div className="line"></div>
              <span>$22.00</span>
            </div>
            <p>Peach with notes of creamy, citrus and spice</p>
          </div>
          <div className="cocktail-box">
            <div className="cocktail-price">
              <p>Tropicool</p>
              <div className="line"></div>
              <span>$27.00</span>
            </div>
            <p>A Pineapple & Mixed Fruit Blend</p>
          </div>
          <div className="cocktail-box">
            <div className="cocktail-price">
              <p>Tequila</p>
              <div className="line"></div>
              <span>$30.00</span>
            </div>
            <p>Sweet, fruity, earthy Flavour made with the blue agave plant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailPrice;
