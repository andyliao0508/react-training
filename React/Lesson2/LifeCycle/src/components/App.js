import React, { Component } from 'react';

import Clock from './Clock';

export default class App extends Component {
  // ES7 寫法
  state = {
    clockIsShow: true
  }

  handleToggleClock = () => {
    this.setState({
      clockIsShow: !this.state.clockIsShow
    })
  }

  render() {
    return (
      <div>
        {this.state.clockIsShow &&
          <Clock />
        }
        <button onClick={this.handleToggleClock}>Toggle Clock</button>
      </div>
    );
  }
}