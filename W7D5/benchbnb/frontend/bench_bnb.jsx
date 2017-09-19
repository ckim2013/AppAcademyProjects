import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {login} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  // let store;

  // if(window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser, errors: []}}
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
    let store = configureStore();
  window.dispatch = store.dispatch;
  // }
  window.store = store;
  window.login = login;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
