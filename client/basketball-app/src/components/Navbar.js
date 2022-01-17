import React from "react";
import './Styles/Navbar.css'

export default function Navbar() {

  return (
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
          <li><a href="/messages">Messages</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
         
          
        </ul>
      </nav>
    </>

  );


} 