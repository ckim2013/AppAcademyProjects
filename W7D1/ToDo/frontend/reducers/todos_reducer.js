import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, receiveTodos, receiveTodo, removeTodo} from '../actions/todo_actions';
import {merge} from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


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
      newTodos.delete(action.todo.id);
      return newTodos;
    default:
      return state;
  }
};

export default todosReducer;
