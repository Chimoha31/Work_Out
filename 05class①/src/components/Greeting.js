import React from "react";

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    console.log(hours);

    let greetingWords;
    if (hours < 12) {
      greetingWords = "Good Morning 🌞";
    } else if (hours > 12 && hours < 17) {
      greetingWords = "Good Afternoon";
    } else {
      greetingWords = "Good Evening🌛";
    }
    return <h1>Hi, Madam! {greetingWords}</h1>;
  }
}

export default Greeting;
