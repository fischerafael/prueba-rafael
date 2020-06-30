import React from "react";
import MenuNavItem from "../MenuNav2Item/menunavitem";

import './style.css'

function MenuNav({ title, openMenuNav, closeMenuNav, isMenuNavOpen, Items }) {
  return (
    <li className="menu-nav-2-list" onMouseEnter={openMenuNav} onMouseLeave={closeMenuNav}>
      <h2>{title}</h2>
      <ul
        className="menu-nav-2"
        style={{ display: `${isMenuNavOpen.display}` }}
      >
        {Items.map((item) => (
          <MenuNavItem key={item.name} name={item.name} img={item.img}/>
        ))}
      </ul>
    </li>
  );
}

export default MenuNav;
