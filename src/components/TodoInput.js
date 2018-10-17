import React, { Component } from 'react'

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.todoText,
        };

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.formSubmiting = this.formSubmiting.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    addItem(item) {
        if (item.length > 0) {
            this.props.addItem(item);
            this.setState({
                value: '',
            });
        }
    }

    formSubmiting(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className='td--input-wrapper'>
                <form onSubmit={this.formSubmiting}>
                    <input className='td--input' type="text" placeholder='To Do text goes here' value={this.state.value} onChange={this.handleChange} />
                    <button type="submit" className='td--submit-button' onClick={() => this.addItem(this.state.value)}>Create</button>
                </form>
            </div>
        );
    }
}