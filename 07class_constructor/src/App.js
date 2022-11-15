import React from "react";
import "./App.css";
import Challenge02 from './challenge/Challenge02';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goOut: "Yes",
    };
    this.toggleGoOut = this.toggleGoOut.bind(this);
  }

  // arrow関数を使えず下記の表記になる関数の書き方には、Line5のconstructor内でbind()しなければならない。
  toggleGoOut() {
    this.setState((prev) => {
      return {
        goOut: prev.goOut === "Yes" ? "No" : "Yes",
      };
    });
  }

  render() {
    return (
      <div className="goOut_container">
        <p>Class Component</p>
        <h1>Q: Should I go out tonight?</h1>
        <div className="goOut_button" onClick={this.toggleGoOut}>
          <h1>A: {this.state.goOut}</h1>
        </div>

        <p>-------------------------------------------------</p>
        <Challenge02 />
      </div>
    );
  }
}
