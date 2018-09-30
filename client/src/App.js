import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimeLayout from "./components/AnimeLayout";
import Manga from "./components/Routes/Manga";

const App = () => (
  <Router>
    <Body>
      <Container>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" component={AnimeLayout} />
          <Route path="/manga" component={Manga} />
        </Switch>
      </Container>
      <Footer>
        <p>Made with love by AC</p>
      </Footer>
    </Body>
  </Router>
);

export default App;

// STYLED COMPONENTS - BODY, CONTAINER, FOOTER
const Body = styled.div`
  font-family: "Exo", sans-serif;
  background-color: #222238;
  color: white;
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 1em;
`;

const Container = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 4;
`;

const Footer = styled.footer`
  grid-column: 2 / 3;
`;

// background-image: linear-gradient(
//   130deg,
//   rgba(2, 0, 36, 1) 0%,
//   rgba(82, 9, 121, 1) 50%,
//   rgba(0, 212, 255, 1) 100%
// );
