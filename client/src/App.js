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
      // response: "",
      query: ""
    };
  }

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch("/api/hello");
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  onUpdate = e => {
    this.setState({
      query: e
    });
  };

  render() {
    return (
      <Router>
        <div className="Container">
          <header>
            <Navbar />
          </header>
          <Selector onUpdate={this.onUpdate} />
          {/* <p>{this.state.response}</p> */}
          <Anime key={Math.random()} query={this.state.query} />
          <Switch>
            <Route exact path="/manga" component={Manga} />
          </Switch>

          <div className="Footer">
            <p>Made with &#x2764; by AC</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
