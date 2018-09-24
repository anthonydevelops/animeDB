import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimeContainer from "./components/AnimeContainer";
import Manga from "./components/AnimeData/Manga";

const App = () => (
  <Router>
    <div className="App">
      <Container>
        <header>
          <Navbar />
        </header>

        <Switch>
          <Route exact path="/" component={AnimeContainer} />
          <Route path="/manga" component={Manga} />
        </Switch>
      </Container>
    </div>
  </Router>
);

export default App;

// background-image: linear-gradient(
//   130deg,
//   rgba(2, 0, 36, 1) 0%,
//   rgba(82, 9, 121, 1) 50%,
//   rgba(0, 212, 255, 1) 100%
// );
