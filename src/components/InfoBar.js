import React, { Component } from "react";
import email from "../images/email.svg";
import mobile from "../images/mobile.svg";
import location from "../images/location.svg";
import linkedin from "../images/linkedin.svg";

export default class InfoBar extends Component {
  render() {
    return (
      <div className="info-bar">
        <div className="layout">
          <div className="flex">
            <img alt="email" src={email} className="info-icon" />
            <a href="mailto:sachin.saluja@gmail.com" className="link-reset">
              sachin.saluja@gmail.com
            </a>
          </div>
          <div className="flex">
            <img alt="mobile" src={mobile} className="info-icon" />
            +33 6 05 71 39 93
          </div>
          <div className="flex">
            <img alt="location" src={location} className="info-icon" />
            Paris, France
          </div>
          <div className="flex">
            <img alt="linkedin" src={linkedin} className="info-icon" />
            <a
              href="https://www.linkedin.com/in/salujasachin"
              className="link-reset"
            >
              linkedin.com/in/salujasachin
            </a>
          </div>
        </div>
      </div>
    );
  }
}
