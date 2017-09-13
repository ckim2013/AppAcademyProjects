import {APIUtils} from '../util/todo_api_util';
import {receiveErrors} from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';


export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

// export const toggleDone = (todo) => ({
//   type: TOGGLE_DONE,
//   todo
// });

export const fetchTodos = () => dispatch => (
  APIUtils.getAllTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  APIUtils.saveTodo(todo).then(newTodo => dispatch(receiveTodo(newTodo)), err => {
    return dispatch(receiveErrors(err.responseJSON));})
);

export const updateTodo = (todo) => dispatch => (
  APIUtils.updateTodo(todo).then(updatedTodo => dispatch(receiveTodo(updatedTodo)), err => {
    return dispatch(receiveErrors(err.responseJSON));})
);


window.fetchTodos = fetchTodos;



  // NOTE: Window testing
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
