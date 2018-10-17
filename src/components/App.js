import React, { Component } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoItem from './TodoItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      uniqueKey: 0
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  addItem(todoText) {
    let items = this.state.items;
    items.push({ id: this.state.uniqueKey, text: todoText });
    this.setState({
      items: items,
      uniqueKey: ++this.state.uniqueKey
    });
  }

  removeItem(id) {
    this.setState({
      items: this.state.items.filter((item, index) => item.id !== id),
      uniqueKey: --this.state.uniqueKey
    });
  }
  editItem(id, value) {
    this.state.items.forEach(item => {
      if (item.id == id) {
        item.text = value;
      }
    });
    this.setState({
      items: this.state.items,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="td--wrapper">
          <Header counter={this.state.uniqueKey} />
          <TodoInput todoText="" addItem={this.addItem} />
          <ul>
            {
              this.state.items.map((item) => {
                return <TodoItem item={item} key={item.id} id={item.id} removeItem={this.removeItem} editItem={this.editItem} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;