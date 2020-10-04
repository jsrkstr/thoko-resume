import React, { Component } from "react";

export default class Certificate extends Component {
  render() {
    return (
      <div className="certificate mb-3">
        <div className="certificate-title">{this.props.info.title}</div>
        <div className="certificate-text theme-body-1">{this.props.info.dates}</div>
        <div className="certificate-text theme-label">{this.props.info.description}</div>
      </div>
    );
  }
}
