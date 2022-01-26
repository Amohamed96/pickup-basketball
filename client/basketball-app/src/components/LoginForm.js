import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Styles/LoginForm.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function LoginForm() {
  const [user, setUser] = useState({ name: null, password: null, email: null });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");

  const toggleCheckbox = (event) => {};

  const storeUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!user.email || !user.password) {
      setError("Sorry, You must enter a valid email or password");
      return;
    }
    if (user.password.length < 3) {
      setError("Sorry, You must enter a password longer than 3 characters");
      return;
    }
    console.log("USER *********--", user);
    axios.post("/api/users/login", user).then((result) => {
      console.log("RESULTS>>", result.data.user);
      setUser(result.data.user);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      setRedirect(`/profile`);
    });
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div className="login-wrap">
      <span>{error}</span>
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label for="tab-1" href="/login" className="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label for="tab-2" className="tab">
          <a href="/register">Sign Up</a>
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label for="user" className="label">
                Email:
              </label>
              <input
                name="email"
                id="user"
                type="email"
                className="input"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Password:
              </label>
              <input
                name="password"
                id="pass"
                type="password"
                className="input"
                data-type="password"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <input
                id="check"
                type="checkbox"
                className="check"
                onChange={toggleCheckbox}
              />
              <label for="check">
                <span className="icon"></span> Keep me Signed in
              </label>
            </div>
            <div className="group">
              <button type="submit" className="button" onClick={handleLogin}>
                Sign In
              </button>
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
          <div className="sign-up-htm">
            <div className="group">
              <label for="user" className="label">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Repeat Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Email Address
              </label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <label for="tab-1">Already Member?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
