import {RECEIVE_ERRORS, CLEAR_ERRORS, receiveErrors, clearErrors} from '../actions/error_actions';

export const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return state.concat(action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
