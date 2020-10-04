import React, { Component } from 'react'

export default class Widget extends Component {
    render() {
        return (
            <div className="mb-4">
                <div className="layout-item-title mb-2">{this.props.title}</div>
                <div>{this.props.content}</div>
            </div>
        )
    }
}
