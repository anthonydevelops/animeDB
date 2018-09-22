import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Anime from "./components/Anime";
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
            <Header />
          </div>
          <div>
            <Anime />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
