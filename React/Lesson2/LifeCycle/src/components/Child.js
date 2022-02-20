import React, { Component, PureComponent } from 'react';

export default class Child extends PureComponent {

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.data !== this.props.data;
  // }

  render() {
    console.log('child render');
    return (
      <p>{this.props.data}</p>
    );
  }
}