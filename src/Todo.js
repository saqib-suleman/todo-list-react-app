import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <button>edit</button>
        <button>delete</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
