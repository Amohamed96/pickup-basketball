import React, { useState, useEffect } from "react";
import "../Styles/Register.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function RegisterForm() {
  const [user, setUser] = useState({
    name: null,
    password: null,
    password2: null,
    email: null,
    bio: null,
    avatar: null,
    team_id: null,
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");

  const toggleCheckbox = (event) => {
    console.log("EVENT TARGET", event.target);
  };

  const storeUserData = (e) => {
    console.log("EVENT TARGET +++ ", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (
      !user.name ||
      !user.password ||
      !user.email ||
      !user.bio ||
      !user.avatar ||
      !user.team_id
    ) {
      setError("Sorry, You must enter your credentials to continue");
      return;
    }
    if (user.password.length < 3) {
      setError("Sorry, You must enter a password longer than 3 characters");
      return;
    }
    if (user.password !== user.password2) {
      setError("Both passwords must match");
      return;
    }
    if (user.team_id > 4 || user.team_id < 1) {
      setError(`Must pick a team from 1-4... You'll see why `);
      return;
    }
    console.log("USER *********--", user);
    axios
      .post("http://localhost:3001/api/users/signup", user)
      .then((result) => {
        console.log("RESULTS>>", result.data);
        setUser(result.data);
        localStorage.setItem("user", JSON.stringify(result.data));
        setRedirect("/profile");
      })

      .catch((err) => {
        console.log("errrrr", err);
        setError(
          "Sorry, a user with that email exists, you will be redirected to the login shortly"
        );
        setTimeout(() => {
          setRedirect("/login");
        }, 4000);
      });
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div className="register-wrap">
      <span className="error">{error}</span>
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" />
        <label for="tab-1" className="tab">
          <a href="/login">Sign In</a>
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" checked />
        <label for="tab-2" className="tab">
          <a href="/register">Sign Up</a>
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label for="user" className="label">
                Username
              </label>
              <input
                name="name"
                id="user"
                type="text"
                className="input"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Password
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
              <input type="submit" className="button" value="Sign In" />
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
              <input
                name="name"
                id="user"
                type="text"
                className="input"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Email Address
              </label>
              <input
                id="pass"
                name="email"
                type="email"
                className="input"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Password
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
              <label for="pass" className="label">
                Repeat Password
              </label>
              <input
                id="pass"
                name="password2"
                type="password"
                className="input"
                data-type="password"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="user" className="label">
                Bio, Tell us a little bit about yourself!
              </label>
              <input
                name="bio"
                id="bio"
                type="text"
                className="input"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="user" className="label">
                Paste a link for your avatar! (We'll be accepting files soon)
              </label>
              <input
                name="avatar"
                id="img"
                type="text"
                className="input"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="user" className="label">
                Pick your team!
              </label>
              <input
                name="team_id"
                id="team"
                placeholder="You must pick from teams 1-4 :)"
                type="text"
                className="input"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <input
                type="submit"
                className="button"
                value="Sign Up"
                onClick={handleSignup}
              />
              <span className="error">{error}</span>
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
