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
      startTimer : false
    };
  }


  startCounter = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        showCounter : true,
        startTimer : true,
        value : Number(this.state.count),
        count : ''
      }
    })
  };

  stopCounter = () => {
    this.setState({startTimer : false})
  };

  handleRemoveCounter = () => {
    clearInterval(this.interval);
    this.setState(prevState => {
      return {
        ...prevState,
        value: 0,
        count : '',
        showCounter: false,
        startTimer : false
      }
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
    this.setState({startTimer : true})
  }
  componentDidUpdate() {
    if(this.interval) {
      clearInterval(this.interval)
    }

    if(this.state.startTimer) {
      this.interval = setInterval(() => {
        this.setState((prevState) => {
          return {
            value:  prevState.value + 1,
          };
        });
      }, 1000);
    }
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
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
