import React, { useState, Component } from "react";
import { Redirect } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import "./Menu.css";
import Navbar from "../Navbar";
export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Segment inverted className="Menu-Segment">
          <Menu inverted secondary>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="profile"
              active={activeItem === "profile"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="messages"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
      </>
    );
  }
}
