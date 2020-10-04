import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <div className="skill mb-3">
        <div className="skill-title">{this.props.info.title}</div>
        <div className="skill-text theme-body-1">{this.props.info.text}</div>
      </div>
    );
  }
}
