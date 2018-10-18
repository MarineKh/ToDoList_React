import React, { Component } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import EditItem from './EditItem'
import New from './StatusButtons/New'
import Done from './StatusButtons/Done'

export default class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editItem: false,
            statusButton: false,
            isHovering: false
        }
        this.editItem = this.editItem.bind(this);
        this.statusButton = this.statusButton.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        this.setState({
            isHovering: !this.state.isHovering
        });
    }

    removeItem(id) {
        this.props.removeItem(id);
    }

    editItem(value) {
        this.setState({
            editItem: !this.state.editItem
        })
    }

    update = (value) => {
        this.props.editItem(this.props.id, value);
    }

    statusButton() {
        this.setState({
            statusButton: !this.state.statusButton
        })
    }

    render() {
        let { editItem } = this.state
        let { statusButton } = this.state
        let renderStatusButton = statusButton ? <Done onClick={this.statusButton} /> : <New onClick={this.statusButton} />
        let renderitem = editItem
            ? <EditItem defValue={this.props.item.text} editItem={editItem} onEditItem={this.editItem} update={this.update} />
            :
            <li onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}>
                {this.props.item.text}
                {this.state.isHovering &&
                    <div className="td--buttons-wrapper">
                        <button className="td--removeItem" onClick={(e) => this.removeItem(this.props.id)}><FaTrashAlt /></button>
                        <button className="td--editItem" onClick={(e) => this.editItem(this.props.id)}><FaPen /></button>
                    </div>
                }
                {renderStatusButton}
            </li>

        return (
            <div className='td--itemContainer'>
                {renderitem}
            </div>
        )
    }
}