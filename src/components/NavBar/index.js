import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile.js";
import { logout } from "../../services/auth-service.js";
import { LOGOUT } from "../../actions/profile.actions.js";
import Dropdown from 'react-bootstrap/Dropdown';

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
    <div className="navbar navbar-light bg-secondary navbar-fixed-top" style={{"height":"60px"}}>
      <Link to="" className="navbar-brand ms-3">
        BrewMaster
      </Link>
      <div className="navbar-nav " style={inlineBlock}>
        <div className="d-none d-md-block">
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
        </div>
        <Dropdown className="d-block d-md-none mx-3">
          <Dropdown.Toggle variant="success" className="btn-dark">
            <i className="fa-solid fa-bars"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link className="nav-link" to="/">
                {" "}
                Home
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="nav-link" to="profile">
                {" "}
                Profile
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="nav-link" to="search">
                {" "}
                Search Breweries
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="nav-link" to="login" onClick={onClickLogout}>
                {" "}
                {!!profile ? "Logout" : "Login / Sign Up"}
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavBar;
