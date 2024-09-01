import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaPowerOff, FaRegHeart } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import { AuthContext } from "../../context/AuthProvider";
import axios from "../../api/axios";

const HeaderRight = () => {
  const { auth, destroyAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const logout = () => {
    axios.post("/user/sign-out", {}, { withCredentials: true })
      .then(() => {
        destroyAuth()
        navigate("/login", { replace: true })
      })
  }

  return (
    <div className="header-right">
      <ul className="menu-icon">
        {/* <li>
          <Link className="nav-search search-switch">
            <IoSearch className="icon search-icon" />
          </Link>
        </li> */}
        { auth.userID && auth.role === "student" ? (
          <>
            <li>
              <Link className="icon-link" to="/wishlist">
                <FaRegHeart className="icon heart-icon" />
              </Link>
            </li>
            {/* <li>
              <Link className="icon-link">
                <MdNotificationsNone className="icon notification-icon" />
              </Link>
            </li> */}
          </>
        ) : "" }
        { auth.userID ? (
          <li>
            <a className="icon-link" onClick={logout}>
              <FaPowerOff className="icon user-icon" />
            </a>
          </li>
        ) : "" }
        <li>
          <Link className="icon-link" to={ auth.userID ? "/profile" : "/login" }>
            <LuUser2 className="icon user-icon" />
          </Link>
        </li>
        { auth.userID && auth.role === "student" ? (
          <li>
            <Link className="icon-link" to="/cart">
              <TbShoppingCart className="icon cart-icon" />
            </Link>
          </li> 
        ) : "" }
      </ul>
    </div>
  )
}

export default HeaderRight;