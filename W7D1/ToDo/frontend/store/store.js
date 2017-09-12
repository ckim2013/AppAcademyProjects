import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

export const configStore = function configStore () {
  return createStore(rootReducer);
};
