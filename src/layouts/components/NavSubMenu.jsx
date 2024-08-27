import React from "react";
import { Link } from "react-router-dom";

const NavSubMenu = ({subMenu}) => {
  return (
    <ul className="submenu">
      {subMenu?.map((item, index) => (
        <li key={index}>
          <Link to={item.url}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavSubMenu;