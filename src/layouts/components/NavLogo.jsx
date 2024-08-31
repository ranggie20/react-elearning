import React from "react";
import { Link } from 'react-router-dom'

const NavLogo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img alt={'Logo'} src="/assets/img/logo/logo.png" />
      </Link>
    </div>
  )
}

export default NavLogo;