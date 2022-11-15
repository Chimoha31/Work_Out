import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";

// -------------------------
// Functional Component
// -------------------------
// const App = (props) => {
//   return (
//     <h1>{props.type} Component</h1>
//   )
// }

// export default App

//------------------------
// Class Component
//------------------------
export default class App extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.type} Component</h1>
        
        <Greeting />
      </>
    );
  }
}
