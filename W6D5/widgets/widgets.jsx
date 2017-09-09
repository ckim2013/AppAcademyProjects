import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Weather from './frontend/weather';
import AutoComplete from './frontend/autocomplete';

const Names = ["Chris", "Kim", "Foo", "Bar", "Christian", "Christopher"];


class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <br/>
        <Weather />
        <br/>
        <AutoComplete names={Names}/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
