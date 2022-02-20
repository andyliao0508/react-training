import React, { Component } from 'react';

import Counter from './Counter';
import Note from './Note';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        {/* <Note /> */}
      </div>
    );
  }
}