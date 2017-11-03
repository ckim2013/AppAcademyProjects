import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({inputVal: e.target.value});
  }

  handleClick(name) {
    console.log(name);
    this.setState({inputVal: name});
  }

  render () {
    let result;
    let matches = [];
    let inputLength = this.state.inputVal.length;
    if (inputLength === 0) {
      matches = matches.concat(this.props.names);
    } else {
      this.props.names.forEach((name) => {
        if (this.state.inputVal.toLowerCase() === name.slice(0, inputLength).toLowerCase()) {
          matches.push(name);
        }
      });
    }

    return (
      <div>
        <div className='header-container'>
          <h1>Autocomplete</h1>
        </div>
        <div>
          Name: <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
        </div>
        <ul>
          {matches.map((name, i) => <li key={name + i} onClick={this.handleClick.bind(this, name)}>{name}</li>)}
        </ul>
      </div>
    );
  }
}



export default AutoComplete;
