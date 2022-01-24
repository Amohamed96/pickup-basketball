import React, { useEffect, useState } from "react";
import "./Styles/Navbar.css";

const logout = function () {
  localStorage.clear();
};

export default function Navbar() {
  const currentUser = localStorage.getItem("user");
  const [user, setUser] = useState({});
  console.log("NAV USER", user);

  useEffect(() => {
    console.log("CURRENT USER from LOCAL", currentUser);
    console.log(" USER from LOCAL", user);

    setUser(JSON.parse(currentUser));
  }, [currentUser]);

  return (
    <>
      <a href="/" class="logo" target="_blank">
        <div>FindMyCourt</div>
      </a>

      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li>
            <a href="/">Home</a>
          </li>
          {user ? (
            <>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/messages">Messages</a>
              </li>
              <li>
                <a href="/login" onClick={() => logout()}>
                  Logout
                </a>
              </li>
              <li>
                <a href="/matches-player">Create Match</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
