import React, { Component } from 'react'

export default class EditItem extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.value = e.target.value;
    }

    edit = () => {
        this.props.update(this.value);
        this.props.onEditItem();
    }

    render() {
        return (
            <div className='td--edit-wrapper'>
                <form>
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