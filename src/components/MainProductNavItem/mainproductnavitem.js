import React from "react";
import './style.css'

function MainProductNavItem({ showTable, showChair, number, title, color, fontColor, fontWeight }) {
  return (
    <div className="show-product" onClick={number === "01" ? showTable : showChair}>
      <div className="show-product-mark" style={{background: `${color}`}}></div>
      <h3>{number}</h3>
      <h2 style={{fontWeight: `${fontWeight}`, color: `${fontColor}`}}>{title}</h2>
    </div>
  );
}

export default MainProductNavItem;
