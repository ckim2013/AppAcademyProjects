import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import {ourThunk} from '../middleware/thunk';

export const configStore = function configStore () {
  // Might need to put in a better initialState
  return createStore(rootReducer, {}, applyMiddleware(ourThunk));
};
