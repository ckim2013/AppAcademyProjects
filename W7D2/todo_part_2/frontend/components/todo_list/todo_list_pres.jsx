import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <TodoListItem key={todo.id} todo={todo}
                removeTodo={this.props.removeTodo}
                updateTodo={this.props.updateTodo} />);}
            )
          }
        </ul>
        <br/>
        <TodoForm errors={this.props.errors} createTodo={this.props.createTodo} clearErrors = {this.props.clearErrors}/>
      </div>
    );
  }

  componentDidMount() {
    return this.props.fetchTodos();
  }
}

export default TodoList;
