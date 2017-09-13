import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, TOGGLE_DONE, receiveTodos, receiveTodo, removeTodo, toggleDone} from '../actions/todo_actions';
import {merge} from 'lodash';

export const initialState = {};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      const newTodo = {};
      newTodo[action.todo.id] = action.todo;
      return merge({}, state, newTodo);
    case REMOVE_TODO:
      const newTodos = merge({}, state);
      delete newTodos[action.todo.id];
      return newTodos;
    case TOGGLE_DONE:
      const stateCopy = merge({}, state);
      const todoToToggle = stateCopy[action.todo.id];
      todoToToggle["done"] = !action.todo.done;
      return stateCopy;
    default:
      return state;
  }
};

export default todosReducer;
