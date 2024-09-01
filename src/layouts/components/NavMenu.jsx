import React, { useEffect, useState } from "react";
import NavMenuItem from "./NavMenuItem";
import axios from "../../api/axios";

const NavMenu = () => {
  const [menuList, setMenuList] = useState()

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/public/category")

      setMenuList(response.data.data.map((d) => ({
        url: `/category/${d.category_id}`,
        title: d.category_name
      })) || [])
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="main-menu d-none d-lg-block">
      <nav>
        <ul id="navigation">
          <NavMenuItem url={"/"} title={"Home"} />
          <NavMenuItem url={"/category"} title={"Category"} subMenu={menuList} />
          <NavMenuItem url={"/ourteam"} title={"Our Team"} />
          <NavMenuItem url={"/about"} title={"About"} />
        </ul>
      </nav>
    </div>
  )
}

export default NavMenu;