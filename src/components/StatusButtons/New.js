import React, { Component } from 'react'

export default class New extends Component {
    render() {
        return (
            <div className='td--new' onClick={this.props.onClick}>New</div>
        )
    }
}