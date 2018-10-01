import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Selector from "./components/Selector";
import Anime from "./components/Anime";
import Manga from "./components/Manga";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  onUpdate = e => {
    this.setState({
      query: e
    });
  };

  render() {
    return (
      <Router>
        <div className="Body-wrapper">
          <div className="Container">
            <header>
              <Navbar />
            </header>
            <Selector onUpdate={this.onUpdate} />
            <Anime key={Math.random()} query={this.state.query} />
            <Switch>
              <Route exact path="/manga" component={Manga} />
            </Switch>
          </div>
          <div className="Footer">
            <p>Made with &#x2764; by AC</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
