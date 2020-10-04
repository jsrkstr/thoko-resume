import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="education mb-3">
        <div className="education-title theme-title-1">{this.props.info.title}</div>
        <div className="education-text theme-title-2 mb-1">{this.props.info.text}</div>
        <div className="education-location theme-label">{this.props.info.location}</div>
      </div>
    );
  }
}
