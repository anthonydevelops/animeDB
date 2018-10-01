import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Selector from "./components/Selector";
import Anime from "./components/Routes/Anime";
import Manga from "./components/Routes/Manga";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  changedQuery = data => {
    this.setState({
      query: data
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
            <Selector handleQuery={this.changedQuery} />
            <Anime key={Math.random()} queryChange={this.state.query} />
            <Switch>
              {/* <Route exact path="/" component={Selector} /> */}
              <Route path="/manga" component={Manga} />
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
