import React, { Component } from 'react'
import TodoInput from './TodoInput'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3 className='td--header'>To Do List</h3>
                <p>Total {this.props.counter} todo</p>
            </div>
        )
    }
}