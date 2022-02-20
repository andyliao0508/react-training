import React, { Component } from 'react';

import Row from './Row';

export default class Typer extends Component {
  state = {
    content: '',
    words: [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',']
    ]
  }

  handleInput = (e) => {
    const input = e.target.innerHTML;
    this.setState((state) => {
      return { 
        content: state.content + input
      }
    })
  }

  render() {
    const { words } = this.state;
    return (
      <div>
        <Row click={this.handleInput} words={words[0]} />
        <Row click={this.handleInput} words={words[1]} class="rowTwo" />
        <Row click={this.handleInput} words={words[2]} class="rowThree" />
        <p className="output">{this.state.content}</p>
      </div>
    );
  }
}