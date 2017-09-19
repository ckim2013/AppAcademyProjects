import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const {currentUser} = this.props;
    if (currentUser) {
      return (
        <div>
          <h3>Welcome {currentUser.username}!</h3>
          <button onClick={this.handleClick}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <br/>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
