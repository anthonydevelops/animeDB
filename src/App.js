import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AnimeContainer from "./components/AnimeContainer";
import { Container } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <Navbar />
          </header>
          <div className="Header">
            <AnimeContainer />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
