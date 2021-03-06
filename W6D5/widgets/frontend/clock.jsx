import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  tick() {
    const time = new Date();
    this.setState({time});
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    this.timerId = 0;
  }

  render() {
    const time = this.state.time;
    return (
      <div>
        <div className='header-container'>
          <h1>Clock</h1>
        </div>
        <div className="clock">
          <div>Time: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
          <div>Date: {time.toDateString()}</div>
        </div>
      </div>
    );
  }

}

export default Clock;
