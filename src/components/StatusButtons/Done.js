import React, { Component } from 'react'

export default class New extends Component {
    render() {
        return (
            <div className='td--done' onClick={this.props.onClick}>Done</div>
        )
    }
}