import React, { useContext, useEffect, useState } from "react";
import NavMenuItem from "./NavMenuItem";
import axios from "../../api/axios";
import { AuthContext } from "../../context/AuthProvider";

const NavMenu = () => {
  const [menuList, setMenuList] = useState()
  const { auth, destroyAuth } = useContext(AuthContext)

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
          { ((auth.userID && auth.role === "student") || (!auth.userID)) ? (
            <>
              <NavMenuItem url={"/category"} title={"Category"} subMenu={menuList} />
              <NavMenuItem url={"/ourteam"} title={"Our Team"} />
              <NavMenuItem url={"/about"} title={"About"} />
            </>
          ) : "" }
          { auth.userID && auth.role === "student" ? (
            <NavMenuItem url={"/mycourse"} title={"My Courses"} />
          ) : "" }
          { auth.userID && auth.role === "teacher" ? (
            <>
              <NavMenuItem url={"/manage/courses"} title={"Manage Courses"} />
            </>
          ) : "" }
          { auth.userID && auth.role === "admin" ? (
            <>
              <NavMenuItem url={"/admin-category"} title={"Manage Category"} />
              <NavMenuItem url={"/admin-course"} title={"Manage Course"} />
            </>
          ) : "" }
        </ul>
      </nav>
    </div>
  )
}

export default NavMenu;