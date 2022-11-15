import React from "react";

export default class Challenge01 extends React.Component {
  state = {
    count: 0,
  };

  substract = () => {
    this.setState((prevCount) => ({ count: prevCount.count - 1 }));
  };

  add = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
  };

  render() {
    return (
      <div className="count_container">
        <button onClick={this.substract}> - </button>
        <div>
          <h1>{this.state.count}</h1>
        </div>
        <button onClick={this.add}> + </button>
      </div>
    );
  }
}
