import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    character: {},
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://swapi.py4e.com/api/people/1")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ character: data });
        console.log(data);
      });
  }

  render() {
    console.log("render");
    return (
      <div style={{ fontSize: "1.5rem" }}>
        <h1>{this.state.character.name}</h1>
      </div>
    );
  }
}
