import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "feed the dog" }, { task: "do the thing" }],
    };
  }

  render() {
    return (
      <div>
        <h1>todolist</h1>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo task={todo.task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
