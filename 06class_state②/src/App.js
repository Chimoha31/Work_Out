import React from "react";
import "./App.css";
import Challenge01 from "./challenge/Challenge01";

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

  toggleGoOut = () => {
    this.setState((prev) => {
      return {
        goOut: prev.goOut === "Yes" ? "No" : "Yes",
      };
    });
  };

  render() {
    return (
      <div className="goOut_container">
        <p>Class Component</p>
        <h1>Q: Should I go out tonight?</h1>
        <div className="goOut_button" onClick={this.toggleGoOut}>
          <h1>A: {this.state.goOut}</h1>
        </div>

        <p>---------------------------------------------------------------------------</p>
        {/* Challenge */}
        <Challenge01 />
      </div>
    );
  }
}
