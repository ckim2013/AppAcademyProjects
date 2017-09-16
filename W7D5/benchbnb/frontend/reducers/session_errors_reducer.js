import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const defaultErrors = {
  errors: []
};

const sessionErrorsReducer = (state = defaultErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return defaultErrors;
    case RECEIVE_SESSION_ERRORS:
      let errors = action.errors;
      return Object.assign({}, state, {errors});
    default:
      return state;
  }
};

export default sessionErrorsReducer;
