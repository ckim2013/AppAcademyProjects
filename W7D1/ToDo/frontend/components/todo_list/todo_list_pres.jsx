import React from 'react';
import {TodoListItem} from './todo_list_item';
import TodoForm from './todo_form';

export const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => <TodoListItem key={todo.id} todo={todo} removeFunction={props.removeTodo} />)}
      </ul>
      <br/>
      <TodoForm receiveFunction={props.receiveTodo}/>
    </div>
  );
};
