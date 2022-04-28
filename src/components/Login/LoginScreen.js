import React, { useState } from "react";
import Button from "../Button";
import * as service from "../../services/auth-service.js";
import { useNavigate } from "react-router";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const login = () =>
    service
      .login({
        username: loginUsername,
        password: loginPassword,
      })
      .then(() => navigate("/profile"))
      .catch((e) => alert(e));

  const signup = (type) =>
    service
      .signup({
        username: signupUsername,
        password: signupPassword,
        name: fullName,
        email,
        type,
      })
      .then(() => navigate("/profile"))
      .catch((e) => alert(e));

  const logInDisabled = !loginUsername || !loginPassword;
  const signUpDisabled =
    !signupPassword || !signupUsername || !fullName || !email;

  const lgStyle ={
   'width': "80%",
   'height': "auto",
   "margin-top":'70px' }
   const smStyle ={
    'width': "100%",
    'height': "auto",
    "margin-top":'70px' }
  return (
    <>
      <div
        className=" bg-secondary rounded  d-none d-md-block"
        style={lgStyle}
      >
        <div className="row">
          <div className="align-items-center col-6">
            <div className="mx-3">
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
              <Button
                title="Login"
                onClick={login}
                className="mt-2"
                disabled={logInDisabled}
              />
            </div>
          </div>
          <div className="align-items-center col-6 mb-3">
            <div className="mx-3">
              <div className="fw-bold text-center h3">Sign Up</div>
              <label htmlFor="signUpName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="signUpName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <label htmlFor="signUpEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="signUpEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                disabled={signUpDisabled}
              />
              <div className="text-muted text-center mt-1">
                Own a brewery? Click this button!
              </div>
              <Button
                title="Sign Up As Brewery Owner"
                onClick={() => signup("BreweryOwner")}
                disabled={signUpDisabled}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className=" mt-3 bg-secondary rounded  d-block d-md-none"
        style={smStyle}
      >
        <div className="align-items-center ">
          <div className="mx-3">
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
            <Button
              title="Login"
              onClick={login}
              className="mt-2"
              disabled={logInDisabled}
            />
          </div>
        </div>
        <div className="align-items-center mb-3">
          <div className="mx-3">
            <div className="fw-bold text-center h3">Sign Up</div>
            <label htmlFor="signUpName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="signUpName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="signUpEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="signUpEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              disabled={signUpDisabled}
            />
            <div className="text-muted text-center mt-1">
              Own a brewery? Click this button!
            </div>
            <Button
              title="Sign Up As Brewery Owner"
              onClick={() => signup("BreweryOwner")}
              disabled={signUpDisabled}
            />
          </div>
        </div>
      </div>
    </>

  );
}
