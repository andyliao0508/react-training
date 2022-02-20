import React, { Component } from 'react';

import Button from './Button';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      post: [],
      counter: 0
    };
  }



  // 使用setState 修改state object的值
  handelSet = () => {
    // Wrong
    // this.state.content = 'Hello';
    // Correct
    this.setState({ content: 'Hello' });
  }



  // setState 為非同步
  // 修改state 需要使用state or props的值時，請使用function 的參數修改值
  set() {

    // Wrong
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // console.log('set: ' + this.state.counter);

    // Correct
    this.setState(function (state) {
      console.log(state.counter);
      return {
        counter: state.counter + 1
      };
    });
    this.setState(function (state) {
      console.log(state.counter);
      return {
        counter: state.counter + 1
      };
    });
    console.log('set: ' + this.state.counter);
  }



  // React自動 merge state Object
  componentDidMount() {
      this.setState({
        post: [123, 234]
      });

      this.setState({
        content: 'Click me'
      });
  }


  
  // state的值也可經由props傳至子元件
  render() {
    console.log(this.state);
    console.log('render: ' + this.state.counter);
    return (
      <div>
        {/* <button className="btn" onClick={this.set.bind(this)}>Click me</button> */}
        <Button content={this.state.content} click={this.handelSet.bind(this)} />
      </div>
    );
  }
}

export default Note