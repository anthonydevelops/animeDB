import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <p className="App-intro">This is where the work will begin...</p>
      </div>
    );
  }
}

export default App;
