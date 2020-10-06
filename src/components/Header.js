import React, { Component } from "react";
import picture from "../images/me.jpg";

export default class Header extends Component {
  render() {
    return (
      <div className="header-component layout py-4">
        <div className="flex">
          <img alt="logo" src={picture} className="user-picture" />
        </div>
        <div className="flex user-info">
          <div className="user-name" contentEditable>Sachin Saluja</div>
          <div className="user-title">Frontend leader & Product manager</div>
          <div className="user-summary theme-body-1">
            Motivated team leader and product manager with 8+ years of
            experience with web products. Successfully managed and developed
            several web projects, including E-commerce portal and Ads DSP
          </div>
        </div>
      </div>
    );
  }
}
