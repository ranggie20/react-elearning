import React from "react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import HeaderRight from "./HeaderRight";

const HeaderArea = () => {
  return (
    <div className="header-area">
      <div className="main-header header-sticky">
        <div className="container-fluid">
          <div className="menu-wrapper">
            <NavLogo></NavLogo>
            <NavMenu></NavMenu>
            <HeaderRight></HeaderRight>
          </div>
          <div className="col-12">
            <div className="mobile_menu d-block d-lg-none"></div>
          </div>
        </div>
      </div>
    </div>
  )
}