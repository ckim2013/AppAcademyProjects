import {connect} from 'react-redux';
import {login, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = formType === 'login' ? (user) => dispatch(login(user)) : (user) => dispatch(signup(user));
  return ({
    formType,
    processForm
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
