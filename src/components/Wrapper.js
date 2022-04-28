import React, { Component } from "react";
import Counter from "./Counter";

export default class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      showCounter: true,
    };
  }

  resetCounter = () => {
    this.setState({value : 0})
    clearInterval(this.interval)
  }

  startCounter = () => {
    if(this.state.value) {
      this.resetCounter()
    }
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          value: prevState.value + 1,
        };
      });
    }, 1000);
  };

  stopCounter = () => {
    clearInterval(this.interval)
  };

  handleRemoveCounter = () => {

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
      <div className="container">
        <div className="card">
          <Counter startFrom={this.state.value} />
          <div className="btn-group">
            <button onClick={this.startCounter}>Start</button>
            <button onClick={this.stopCounter}>Stop</button>
            <button onClick={this.handleRemoveCounter}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
