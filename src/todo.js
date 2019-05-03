import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class ToDo extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
      name: '',
        uncheckedCount: 0,
        items: []
      };
   }
  render() {
    return (
        <div className="container center">
            <h1 className="center title">My TODO App</h1>
            <div className="flow-right controls">
                <span>Item count: <span id="item-count">{this.state.items.length}</span></span>
                <span>Unchecked count: <span id="unchecked-count">{this.state.uncheckedCount}</span></span>
            </div>
            <div className="center form">
                <form onSubmit={ (event) => this.addTodo(event) }>
                    <input type="text" value={this.state.name} onChange={(event) => this.onChange(event)} />
                    <button className="button">Add TODO</button>
                </form>
            </div>
            { this.getToDoList() }
        </div>
     );
  }

  addTodo(event) {
    event.preventDefault();

    if(this.state.name == '')
        return;

    this.setState(
        {
            items: [...this.state.items, { name: this.state.name, checked: true}],
            name: ''
        }
     );
  }

  onChange(event) {
    this.setState({name: event.target.value});
  }

  getToDoList() {
    return (
        <ul id="todo-list" className="todo-list">
        { this.state.items.map((item, index) => (
                <li key={index}>
                    <input type="checkbox" defaultChecked={item.checked} onChange={() => this.setStatus(index)}/>
                    {item.name}
                    <a href="#" onClick={() => this.deleteItem(index)}> Delete</a>
                </li>
            )
         ) }
        </ul>
    )

  }

  setStatus(index) {
    this.state.items[index].checked = !this.state.items[index].checked;
    this.setState({uncheckedCount: this.state.items.filter((item) => !item.checked).length});
  }

  deleteItem(index){
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({items: items});
  }
}

export default ToDo;
