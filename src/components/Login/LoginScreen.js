import React, { useState } from "react";
import Button from "../Button";
import * as service from "../../services/auth-service.js";
import { useNavigate } from "react-router";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const login = () =>
    service
      .login({
        user: {
          username: loginUsername,
          password: loginPassword,
        },
      })
      .then(() => navigate("/profile"))
      .catch((e) => alert(e));

  const signup = (type) =>
    service
      .signup({
        username: signupUsername,
        password: signupPassword,
        name: fullName,
        type,
      })
      .then(() => navigate("/profile"))
      .catch((e) => alert(e));

  return (
    <div className=" d-flex flex-column mt-3 bg-secondary rounded" style={{"width":"80%","height":"60vh"}}>
      <div className="d-flex flex-row flex-grow-1 align-items-center">
        <div className="form-group flex-grow-1  mx-3">
          <div className="fw-bold text-center h3">Login</div>
          <label htmlFor="loginUsername">Username</label>
          <input
            type="text"
            className="form-control"
            id="loginUsername"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <Button title="Login" onClick={login} className="mt-2" />
        </div>
        <div className="form-group flex-grow-1 mx-3">
          <div className="fw-bold text-center h3">Sign Up</div>
          <label htmlFor="signUpName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="signUpName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="signupUsername">Username</label>
          <input
            type="text"
            className="form-control"
            id="signupUsername"
            value={signupUsername}
            onChange={(e) => setSignupUsername(e.target.value)}
          />
          <label htmlFor="signupPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="signupPassword"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <Button
            title="Sign Up As User"
            onClick={() => signup("Regular")}
            className="mt-3"
          />
          <div className="text-muted text-center mt-3">
            Own a brewery? Click this button!
          </div>
          <Button
            title="Sign Up As Brewery Owner"
            onClick={() => signup("BreweryOwner")}
          />
        </div>
      </div>
    </div>
  );
}
