import React from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(value) {
    return (e) => {
      this.setState({[value]: e.target.value});
    };
  }

  render() {

    if (this.props.loggedIn) {
      return (<Redirect to='/' />);
    }
    
    let header;
    if (this.props.formType === 'login') {
      header = (
      <div>
        <h1>Log In!!</h1>
        <Link to="/signup">Sign Up</Link>
      </div>);
    } else {
      header = (
      <div>
        <h1>Sign Up!!</h1>
        <Link to="/login">Log In</Link>
      </div>);
    }

    return (
      <div>
        {header}
        <ul>
          { this.props.errors.map((error) => <li>error</li>) }
        </ul>

        <br />

        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input onChange={this.update('username')} type="text"/>
          </label>

          <br />

          <label>Password
            <input onChange={this.update('password')}type="password"/>
          </label>

          <br />

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
