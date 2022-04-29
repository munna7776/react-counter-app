import React, { Component } from "react";
import styles from '../styles/Wrapper.module.css';

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
    return <div className={styles["counter"]}>{this.state.counter}</div>;
  }
}
