import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = JSON.parse(localStorage.getItem("formData")) || {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };

  componentDidMount() {
    console.log("componentDidMount");
    // this.setState(JSON.parse(localStorage.getItem("formData")));
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    localStorage.setItem("formData", JSON.stringify(this.state));
  }

  render() {
    console.log("render");
    return (
      <div className="form">
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            email="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <textarea type="text" placeholder="Comments"></textarea>
        </form>
      </div>
    );
  }
}
