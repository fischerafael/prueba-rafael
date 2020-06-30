import React from "react";

import './style.css'

function product({ img, title, designer, translateProd }) {
  return (
    <section 
      className="main-product" 
      style={{
      transform: `translate(0, ${translateProd}%)`,
    }}>
      <div className="main-product-description">
        <p>{designer}</p>
        <h2>{title}</h2>
        <div className="main-product-description-p">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        </div>        
        <button>Product Details</button>
      </div>
      <div className="main-product-pic">
          <img src={img} alt="Beautiful black table"/>
      </div>
    </section>
  );
}

export default product;
