//import logo from './logo.svg';
import "./App.css";
import "./assets/css/style.css";
import "./products.js";
import img from "./assets/images/bakeryWindow.jpg";

import products from "./products";

function App() {
  const productsList = products.map((product) => {
    return (
      <div className="container">
        <img src={product.image} alt={product.name} className="img2" />
        <p className="productDetails">
          <span className="text">{product.name}</span>
        </p>
        <p className="productDetails">{product.price}</p>
      </div>
    );
  });
  return (
    <>
      <div className="container">
        <h1 className="title">Nourish Cooking Page</h1>
        <img src={img} alt="MyBakery" className="img1" />
        <p className="paragraph">
          Nourish is a community built by and for kitchen experts. Sharing
          recipes and cooking tips, while celebrating the expertise of home
          cooks online
        </p>
      </div>
      <div className="productsBox">
        <div className="container">
          <img
            src={products[0].image}
            alt={products[0].name}
            className="img2"
          />
          <p className="productDetails">
            <span className="text">{products[0].name}</span>
          </p>
          <p className="productDetails">{products[0].price}</p>
        </div>

        <div className="container">
          <img
            src={products[1].image}
            alt={products[1].name}
            className="img2"
          />
          <p className="productDetails">
            <span className="text">{products[1].name}</span>
          </p>
          <p className="productDetails">{products[1].price}</p>
        </div>
        <div className="container">
          <img
            src={products[2].image}
            alt={products[2].name}
            className="img2"
          />
          <p className="productDetails">
            <span className="text">{products[2].name}</span>
          </p>
          <p className="productDetails">{products[2].price}</p>
        </div>
        <div className="container">
          <img
            src={products[3].image}
            alt={products[3].name}
            className="img2"
          />
          <p className="productDetails">
            <span className="text">{products[3].name}</span>
          </p>
          <p className="productDetails">{products[3].price}</p>
        </div>
      </div>
      ;{productsList}
    </>
    // why i add the new array name in the function here ?
  );
}

export default App;
