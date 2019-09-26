import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Gnb01 extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="앱스토어"
          active={activeItem === "앱스토어"}
          content="앱스토어"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          content="Reviews"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          content="Upcoming Events11"
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
