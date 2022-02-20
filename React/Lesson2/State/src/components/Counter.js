import React, { Component } from 'react';

import Button from './Button';

// props 資料從父源件來 不可修改
// state 資料在 class component裡 可作修改

export default class Counter extends Component {
  constructor(props) {
    super(props);
    // state 必須初始化
    this.state = {
      counter: 0
    }
    
    // 1. bind in constructor or element
    this.handleAddOne = this.handleAddOne.bind(this);
  }

  handleAddOne() {
    this.setState(function(state){
      return { counter: state.counter + 1 }
    })
  }

  // 2. 使用ES6 arrow function (babel 7 需安裝@babel/plugin-proposal-class-properties的 plugin)
  handleSubtractOne = () => {
    this.setState(function(state){
      return { counter: state.counter - 1 }
    })
  }

  handleClear() {
    this.setState({ counter: 0 });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <div>Counter : {counter}</div>
        <button className="btn" onClick={this.handleSubtractOne}> - 1 </button>
        <button className="btn" onClick={this.handleAddOne}> + 1 </button>
        {/* 3. 使用匿名函式return function */}
        <button className="btn" onClick={() => this.handleClear()}>All Clear</button>
        {/* <button className="btn" onClick={() => this.setState({ counter: 0 })}>All Clear</button> */}
      </div>
    );
  }
}