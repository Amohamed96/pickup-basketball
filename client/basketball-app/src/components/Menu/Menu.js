import React, { useState, Component, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Menu as SemanticMenu, Segment } from "semantic-ui-react";
import "./Menu.css";
import Navbar from "../Navbar";
export default function Menu() {
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // const { activeItem } = this.state;
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => {
    console.log("NAME", name);
    setActiveItem(name);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("MENU USER>", user);

  const logout = function () {
    localStorage.clear();
  };

  return (
    <>
      <Segment inverted className="Menu-Segment">
        <SemanticMenu inverted secondary>
          <Link to="/">
            <SemanticMenu.Item
              name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}
            />{" "}
          </Link>
          <Link to="/profile">
            <SemanticMenu.Item
              name="profile"
              active={activeItem === "profile"}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/messages">
            <SemanticMenu.Item
              name="messages"
              active={activeItem === "messages"}
              onClick={handleItemClick}
            />
          </Link>
        </SemanticMenu>
        <SemanticMenu className="Logout-button">
          <Link to="/login" position="right">
            <SemanticMenu.Item
              position="right"
              name="logout"
              active={activeItem === "logout"}
              onClick={logout}
            />
          </Link>
        </SemanticMenu>
      </Segment>
    </>
  );
}
