import React from 'react';
import {connect} from 'react-redux';
import TodoList from './todo_list_pres';
import {allTodos} from '../../reducers/selectors';
import {receiveTodo, removeTodo, fetchTodos, createTodo, updateTodo} from '../../actions/todo_actions';
import {receiveErrors, clearErrors} from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  // receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  // toggleDone: (todo) => dispatch(toggleDone(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  clearErrors: () => dispatch(clearErrors()),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
