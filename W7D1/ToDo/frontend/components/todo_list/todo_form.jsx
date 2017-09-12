import React from 'react';
import {uniqueId} from '../../util/uniqueid';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.receiveTodo = props.receiveFunction;
    // this.updateTitle = this.updateTitle.bind(this);
    // this.updateBody = this.updateBody.bind(this);
    this.prepareTodo = this.prepareTodo.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {title: "", body: "", id: uniqueId()};
  }

  updateInput(key) {
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }
  // updateTitle(e) {
  //   this.setState({title: e.target.value});
  // }
  //
  // updateBody(e) {
  //   this.setState({body: e.target.value});
  // }

  handleButton(e) {
    e.preventDefault();
    this.prepareTodo();
    this.resetState();
  }

  prepareTodo() {
    this.receiveTodo(this.state);
  }

  resetState() {
    this.setState({title: "", body: "", id: uniqueId()});
  }

  render () {
    return (
      <div>
        <form>
          <label>Title
            <input onChange={this.updateInput('title')} placeholder="buy bagels" type="text" value={this.state.title}/>
          </label>
          <br/>
          <label>Body
            <textarea value={this.state.body} onChange={this.updateInput('body')} rows="4" cols="100">{this.state.body}</textarea>
          </label>
          <br/>
          <input onClick={this.handleButton} value="Create Todo!" type="button" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
