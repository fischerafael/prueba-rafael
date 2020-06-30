import React from "react";

import './style.css'

function MenuNavItem({ name, img }) {
  return (
    <li className="menu-nav-subitem">
      <h3>{name}</h3>
      <div className="img">
        {img ? <img src={img} alt=""/> : ''}        
      </div>
    </li>
  );
}

export default MenuNavItem;
