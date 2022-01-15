import React from "react";
import './Navbar.css'

export default function Navbar() {

  return (
    // <div className="Navbar">
    //   <a href="/">Home</a>
    //   <a href="/profile">Profile</a>
    //   <a href="/login">Login</a>
    //   <a href="/register">Register</a>

    // </div>
    <>
      <a href="/" class="logo" target="_blank">
        <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
      </a>

      <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>

      <div class="section-center">
        <h1 class="mb-0">Find My Court</h1>
        <h3 class="mb-0"> Climb Your Way To The Top</h3>
        <h5 class="mb-0"><ul> <li>
          Get Started
          <span></span><span></span><span></span><span></span>
        </li>
        </ul></h5>
      </div>
    </>

  );


} 