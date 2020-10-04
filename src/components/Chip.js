import React, { Component } from 'react'

export default class Chip extends Component {
    render() {
        return (
            <div className={"chip d-inline-block " + (this.props.outlined? "outlined" : "")}>
                {this.props.text}
            </div>
        )
    }
}
