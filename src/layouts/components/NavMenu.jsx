import React from "react";
import NavMenuItem from "./NavMenuItem";
import NavSubMenu from "./NavSubMenu";

const NavMenu = () => {
  const menus = [
    {
      url: '/',
      title: 'Home',
    },
    {
      url: '/category',
      title: 'Category',
      subMenu: [
        {
          url: '/development',
          title: 'Development'
        },
        {
          url: '/marketing',
          title: 'Marketing'
        },
        { url: '/software',
          title: 'IT & Software'
        },
      ]
    },
    {
      url: '/ourteam',
      title: 'Our Team'
    },
    {
      url: '/about',
      title: 'About'
    },
  ]
  return (
    <div className="main-menu d-none d-lg-block">
      <nav>
        <ul id="navigation">
          {menus.map((item, index) => (
            <NavMenuItem key={index} url={item.url} title={item.title} subMenu={item?.subMenu} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavMenu;