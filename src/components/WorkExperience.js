import React, { Component } from "react";
import bullet from "../images/bullet.svg";
import link from "../images/link.svg";
// import PropTypes from "prop-types";

export default class WorkExperience extends Component {
  render() {
    return (
      <div className="work-ex mb-3">
        <div className="work-ex-title theme-title-1">
          {this.props.info.title}
        </div>
        <div className="layout mb-1">
          <div className="flex work-ex-company theme-title-2">
            {this.props.info.company}
          </div>
          <div className="flex work-ex-company-type theme-label text-right">
            {this.props.info.companyType}
          </div>
        </div>
        <div className="layout theme-label mb-1">
          <div className="flex">{this.props.info.dates}</div>
          <div className="flex text-right">{this.props.info.location}</div>
        </div>
        <div className="theme-label mb-1">{this.props.info.type}</div>
        {this.props.info.items.map((item) => (
          <div className="work-ex-item mb-2 relative" key={item.id}>
            <img alt="bullet" src={bullet} className="work-ex-item-icon" />
            <div className="work-ex-item-text theme-body-1">
              {item.text}
              {!!item.link && (
                <a href={item.link} target="_blank">
                  <img alt="link" src={link} className="work-ex-link-icon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
