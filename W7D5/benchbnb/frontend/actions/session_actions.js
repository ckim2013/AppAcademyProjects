import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


export const signup = (user) => dispatch => (
  APIUtil.postUser(user)
    .then((createdUser) => dispatch(receiveCurrentUser(createdUser)))
    .catch((errors) => receiveErrors(errors))
);

export const login = (user) => dispatch => (
  APIUtil.postSession(user)
    .then((loggedInUser) => dispatch(receiveCurrentUser(loggedInUser)))
    .catch((errors) => receiveErrors(errors))
);

export const logout = () => dispatch => (
  APIUtil.deleteSession()
    .then(() => dispatch(receiveCurrentUser(null)))
    .catch((errors) => receiveErrors(errors))
);
