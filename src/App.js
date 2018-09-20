import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Anime from "./components/Anime";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
        <Row className="Header">
          <Col>
            <Header />
          </Col>
        </Row>
        <Anime />
      </Container>
    );
  }
}

export default App;
