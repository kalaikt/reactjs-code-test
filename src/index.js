import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ToDo from "./todo";

class App extends React.Component {

  render() {
    return ( <ToDo/> );
  }
}

var appNode = document.getElementById("app");
ReactDOM.render(<App />, appNode);