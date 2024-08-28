import React from "react";
import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";

const HeaderRight = () => {
  return (
    <div className="header-right">
      <ul className="menu-icon">
        <li>
          <Link className="nav-search search-switch">
            <RiSearchLine className="icon search-icon" />
          </Link>
        </li>
        <li>
          <Link className="icon-link" to="/wishlist">
            <FaRegHeart className="icon heart-icon" />
          </Link>
        </li>
        <li>
          <Link className="icon-link">
            <MdNotificationsNone className="icon notification-icon" />
          </Link>
        </li>
        <li>
          <Link className="icon-link" to="/login">
            <LuUser2 className="icon user-icon" />
          </Link>
        </li>
        <li>
          <Link className="icon-link" to="/cart">
            <TbShoppingCart className="icon cart-icon" />
          </Link>
        </li> 
      </ul>
    </div>
  )
}

export default HeaderRight;