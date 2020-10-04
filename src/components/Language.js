import React, { Component } from "react";

export default class Language extends Component {
  render() {
    return (
      <div className="language">
        <div className="language-title theme-body-1">{this.props.info.title}</div>
        <div className="language-text theme-label active">{this.props.info.text}</div>
      </div>
    );
  }
}
