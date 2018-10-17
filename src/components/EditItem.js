import React, { Component } from 'react'

export default class EditItem extends Component {
    constructor(props) {
        super(props);

        this.updateItem = this.updateItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    updateItem(e) {
        // console.log(this.input.value);
        // console.log(2222222222);
        e.preventDefault();
    }

    handleChange(e) {
        // this.setState({ items: e.target.value });
        console.log(e.target.value);
        this.value = e.target.value;
    }

    edit = () => {
        this.props.update(this.value);
        this.props.onEditItem();
    }
    render() {
        return (
            <div className='td--edit-wrapper'>
                <form onSubmit={this.updateItem}>
                    <input className='td--input'
                        type="text"
                        defaultValue={this.props.defValue}
                        ref={(value) => {
                            this.input = value
                        }}
                        onChange={this.handleChange}
                    />
                    <button type="button" className='td--submit-button' onClick={this.edit}>Update</button>
                </form>
            </div>
        );
    }

}