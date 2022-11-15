import React, { useState } from "react";
import "./App.css";

// -------------------------
// Functional Component
// -------------------------
// const App = () => {
//   const [goOut, setGoOut] = useState("Yes");

//   const handleToggle = () => {
//     setGoOut((prev) => {
//       return prev === "Yes" ? "No" : "Yes";
//     });
//   };

//   return (
//     <div>
//       <p>Funtional Component</p>
//       <h1>Q: Should I go out tonight?</h1>
//       <button className="button1" onClick={handleToggle}>
//         {goOut}
//       </button>
//       <div>
//         <h1>A: {goOut}</h1>
//       </div>
//     </div>
//   );
// };

// export default App;

// -------------------------
// Class Component
// -------------------------
export default class App extends React.Component {
  state = {
    goOut: "Yes",
  };

  toggleGoOut() {
    console.log("Clicked");
    setGoOut((prev) => {
      return prev === "Yes" ? "No" : "Yes";
    });
  }

  render() {
    return (
      <div>
        <p>Class Component</p>
        <h1>Q: Should I go out tonight?</h1>
        <button className="button1" onClick={this.toggleGoOut}>
          {this.state.goOut}
        </button>
        <div>
          <h1>A: {this.state.goOut}</h1>
        </div>
      </div>
    );
  }
}
