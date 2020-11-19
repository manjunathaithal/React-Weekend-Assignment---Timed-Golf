import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, startEvent: false };
    this.keyboardEvent = this.keyboardEvent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    // this.id = setInterval(() => {
    //   this.setState((state) => {
    //     return { time: state.time + 1 };
    //   });
    // }, 1000);
    // this.id = setInterval(() => {
    //   this.setState((state) => {
    //     return { time: state.time + 1 };
    //   });
    // }, 1000);
    document.addEventListener("keydown", this.keyboardEvent);
  }
  handleClick() {
    this.id = setInterval(() => {
      this.setState((state) => {
        return { time: state.time + 1 };
      });
    }, 1000);
    this.setState({
      startEvent: true,
    });
  }
  // updateXY() {
  //   // this.setState({
  //   //   x: newX,
  //   //   y: newY,
  //   // });
  //   console.log("hello");
  // }

  keyboardEvent(event) {
    if (this.state.startEvent) {
      if (event.keyCode === 37) {
        this.setState((prevState) => {
          return { x: prevState.x - 5, y: prevState.y };
        });
      } else if (event.keyCode === 38) {
        this.setState((prevState) => {
          return { x: prevState.x, y: prevState.y - 5 };
        });
      } else if (event.keyCode === 39) {
        this.setState((prevState) => {
          return { x: prevState.x + 5, y: prevState.y };
        });
      } else if (event.keyCode === 40) {
        this.setState((prevState) => {
          return { x: prevState.x, y: prevState.y + 5 };
        });
      }
      // this.tempX = this.state.x;
      // this.tempY = this.state.y;
      if (this.state.x === 250 && this.state.y === 250) {
        clearInterval(this.id);
      }
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <div
          className="ball"
          style={{
            position: "absolute",
            left: this.state.x,
            top: this.state.y,
          }}
          onKeyDown={this.keyboardEvent}
        ></div>
        <button className="start" onClick={this.handleClick}>
          Start
        </button>
        <div className="hole"></div>
        <div className="heading-timer">{this.state.time}</div>
      </div>
    );
  }
}

export default Timer;
