import React from "react";
import { Menu as Foot, Menu } from "semantic-ui-react";
export default function Footer() {
  return (
    <Foot>
      <Menu.Item header>Our Company</Menu.Item>
      <Menu.Item
        name="aboutUs"
        // active={activeItem === "aboutUs"}
        onClick={this.handleItemClick}
      />
      <Menu.Item
        name="jobs"
        // active={activeItem === "jobs"}
        onClick={this.handleItemClick}
      />
      <Menu.Item
        name="locations"
        // active={activeItem === "locations"}
        onClick={this.handleItemClick}
      />
    </Foot>
  );
}
