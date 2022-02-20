import React, { Component } from 'react';

import '../../style/style.css';
import SandwichMaker from './SandwichMaker';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SandwichMaker />
      </div>
    );
  }
}

// export default App