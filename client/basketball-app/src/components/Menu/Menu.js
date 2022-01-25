import React, { useState, Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import "./Menu.css";
import Navbar from "../Navbar";
export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const user = JSON.parse(localStorage.getItem("user"));
    console.log("MENU USER>", user);

    const logout = function () {
      localStorage.clear();
    };

    return (
      <>
        <Segment inverted className="Menu-Segment">
          <Menu inverted secondary>
            <Link to="/">
              <Menu.Item name="home" active={activeItem === "home"} />{" "}
            </Link>
            <Link to="/profile">
              <Menu.Item name="profile" active={activeItem === "profile"} />
            </Link>
            {/* <Link to="/matches-player">
              <Menu.Item
                name="create-match"
                active={activeItem === "create-match"}
              />
            </Link> */}

            <Link to="/login">
              <Menu.Item
                position="right"
                name="logout"
                active={activeItem === "logout"}
                onClick={logout}
              />
            </Link>
          </Menu>
        </Segment>
      </>
    );
  }
}
