import React from "react";
import { Link } from "react-router-dom";
import NavSubMenu from "./NavSubMenu";

const NavMenuItem = ({url, title, subMenu}) => {
    return (
      <li>
        <Link to={url}>{title}</Link>
        {subMenu && <NavSubMenu subMenu={subMenu} />}
      </li>
    )
}

export default NavMenuItem;