import { connect } from 'react-dom';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/session_action';
import Greeting from './Greeting';

const mapStateToProps = (state) => ({
  currentUser: state.session.current_user
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
