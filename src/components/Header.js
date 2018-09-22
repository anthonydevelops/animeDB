import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import Anime from "./Anime";
import "../App.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    };
  }

  handleClick = active => {
    this.setState({
      selected: active
    });
  };

  render() {
    const { selected } = this.state;
    let query = "";

    switch (selected) {
      case 0:
        query = "/top/anime/1/tv?subtype=tv";
        return (
          <div className="anime-outer">
            <Anime query={query} />;
          </div>
        );
      case 1:
        query = "/top/anime/1/upcoming?subtype=tv";
        return (
          <div className="anime-outer">
            <Anime query={query} />;
          </div>
        );
      case 2:
        query = "/top/anime/1/movie";
        return (
          <div className="anime-outer">
            <Anime query={query} />;
          </div>
        );
      default:
        return null;
    }

    return (
      <ButtonGroup>
        <Button
          active={selected === 0}
          className="btn-outline-secondary"
          onClick={() => this.handleClick(0)}
        >
          Popular
        </Button>
        <Button
          active={selected === 1}
          className="btn-outline-secondary"
          onClick={() => this.handleClick(1)}
        >
          Upcoming
        </Button>
        <Button
          active={selected === 2}
          className="btn-outline-secondary"
          onClick={() => this.handleClick(2)}
        >
          Movie
        </Button>
      </ButtonGroup>
    );
  }
}

export default Header;
