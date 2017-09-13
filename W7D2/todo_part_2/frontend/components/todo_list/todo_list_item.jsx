import React from 'react';

// export const TodoListItem = ({todo}) => (
//     <li key={todo.id}>{todo.title}</li>
//   );

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.todo = props.todo;
    this.removeTodo = props.removeTodo;
    this.updateTodo = props.updateTodo;
    this.deleteHandler = this.deleteHandler.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = props.todo;
  }

  render() {
    return (
      <li>
        {this.todo.title}
        <button onClick={this.deleteHandler}>Delete</button>
        <button onClick={this.toggle}>{this.state.done ? "Undo" : "Done"}</button>
      </li>
    );
  }

  deleteHandler(e) {
    e.preventDefault();
    this.removeTodo(this.todo);
  }

// NOTE: Pick it up here!
  toggle(e) {
    e.preventDefault();
    console.log(`log1: ${this.state.done}`);
    this.setState({done: !this.state.done});
    console.log(`log2: ${this.state.done}`);
    this.updateTodo(this.state);
    console.log(`log3: ${this.state.done}`);
  }


}

export default TodoListItem;
