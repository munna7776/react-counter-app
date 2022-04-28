import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    }
    
  }
  static getDerivedStateFromProps( props , state) {
    if ( props.startFrom !== state.counter) {
      return {
        counter: props.startFrom,
      };
    }
    return null;
  }
  render() {
    return <div>{this.state.counter}</div>;
  }
}
