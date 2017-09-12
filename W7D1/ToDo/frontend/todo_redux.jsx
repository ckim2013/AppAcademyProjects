import React from 'react';
import ReactDOM from 'react-dom';
import {configStore} from './store/store';
import Root from './components/root';

import {allTodos} from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configStore();

  ReactDOM.render(<Root store={store} /> ,root);

  // NOTE: Window testing
  window.store = store;
  window.allTodos = allTodos;
});
