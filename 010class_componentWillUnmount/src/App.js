import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    windowWidth: window.innerWidth,
    isClicked: false,
  };

  watchWidth = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  clicked = () => {
    this.setState({ isClicked: this.state.isClicked === true ? false : true });
  };

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("resize", this.watchWidth);
  }

  componentWillUnmount() {
    console.log("componentWillUnMount");
    window.removeEventListener("resize", this.watchWidth);
  }

  render() {
    return (
      <div className="width_container">
        <button onClick={this.clicked}>Toggle Window Tracker</button>
        {this.state.isClicked === true ? (
          ""
        ) : (
          <h1>Window width: {this.state.windowWidth}px</h1>
        )}
      </div>
    );
  }
}
