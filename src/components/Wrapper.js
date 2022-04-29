import React, { Component } from "react";
import Counter from "./Counter";
import styles from '../styles/Wrapper.module.css';

export default class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      count : '',
      showCounter: true,
    };
  }

  resetCounter = () => {
    this.setState({
      value : Number(this.state.count),
      showCounter : true
    })
    clearInterval(this.interval)
  }

  startCounter = () => {
    this.resetCounter()
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          value:  prevState.value + 1,
        };
      });
    }, 1000);
  };

  stopCounter = () => {
    clearInterval(this.interval)
  };

  handleRemoveCounter = () => {
    this.setState({
      count : '',
      showCounter : false,
      value : 0
    })
  }

  handleChange = (e) => {
    this.setState(prevState => {
      return {
        ...prevState,
        count : e.target.value
      }
    })
  }


  componentDidMount() {
    this.startCounter();
  }
  componentDidUpdate() {}
  
  componentWillUnmount() {
    this.stopCounter();
  }

  render() {
    return (
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <h1 className={styles["heading"]}>Counter</h1>
          {this.state.showCounter && <Counter startFrom={this.state.value} />}
          <input type="number" placeholder="Enter..." value={this.state.count} onChange={this.handleChange} />
          <div className={styles["btn-group"]}>
            <button className={styles["btn"]} onClick={this.startCounter}>Start</button>
            <button className={`${styles['btn']} ${styles['btn-2']}`} onClick={this.stopCounter}>Stop</button>
            <button className={styles["btn"]} onClick={this.handleRemoveCounter}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
