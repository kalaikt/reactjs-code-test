import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class ToDo extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
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
            <button className="button center" onClick={ () => this.newTodo() }>New TODO</button>
            { this.getToDoList() }
        </div>
     );
  }

  newTodo() {
    this.setState(
        {
            items: [...this.state.items, { name: "TODO Item " + (this.state.items.length + 1), checked: true}]
        }
     );
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
