import React, { Component } from "react";
import Navbar from "./components/Navbar";
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
        <Row>
          <Col>
            <Anime />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
