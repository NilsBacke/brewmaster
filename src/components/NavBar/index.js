import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile.js";
import { logout } from "../../services/auth-service.js";
import { LOGOUT } from "../../actions/profile.actions.js";

const NavBar = () => {
  const profile = useProfile();
  const dispatch = useDispatch();

  const inlineBlock = {
    display: "inline-block",
  };

  const onClickLogout = async () => {
    if (!!profile) {
      await logout();
      dispatch({ type: LOGOUT });
    }
  };

  return (
    <div className="navbar navbar-light bg-secondary navbar-fixed-top">
      <Link to="" className="navbar-brand ms-3">
        BrewMaster
      </Link>
      <div className="navbar-nav " style={inlineBlock}>
        <div style={inlineBlock} className="nav-item mx-3">
          <Link className="nav-link" to="profile">
            {" "}
            Profile
          </Link>
        </div>
        <div style={inlineBlock} className="nav-item mx-3">
          <Link className="nav-link" to="search">
            {" "}
            Search Breweries
          </Link>
        </div>
        <div style={inlineBlock} className="nav-item mx-3">
          <Link className="nav-link" to="login" onClick={onClickLogout}>
            {" "}
            {!!profile ? "Logout" : "Login / Sign Up"}
          </Link>
        </div>
        <div class="dropdown show">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
