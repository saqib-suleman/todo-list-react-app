import React, { Component } from "react";
import NewTodoForm from "./NewTodoFrom";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "feed the dog" }, { task: "do the thing" }],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(task) {
    this.setState({ todos: [...this.state.todos, task] });
  }

  render() {
    return (
      <div>
        <h1>todolist</h1>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>
          {this.state.todos.map((todo) => (
            <Todo todo={todo.task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
