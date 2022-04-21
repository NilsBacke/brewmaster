import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  const inlineBlock = {
    "display":"inline-block"
  }
  return(
    <div className="navbar navbar-light bg-secondary navbar-fixed-top">
      <Link to="" className="navbar-brand"> BrewMaster</Link>
      <div className="navbar-nav "style={inlineBlock}>
        <div style={inlineBlock} className="nav-item mx-2">
          <Link className=" nav-link" to="profile"> Profile</Link>
        </div>
        <div style={inlineBlock} className="nav-item mx-2">
          <Link className="nav-link" to="login"> Login / Sign Up</Link>
        </div>
        <div style={inlineBlock} className=" nav-item mx-2">
          <Link className="nav-link" to="search"> Search Breweries</Link>
        </div>
      </div>

    </div>
  )

}

export default NavBar