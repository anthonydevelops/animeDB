import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import Anime from "./AnimeData/Anime.js";
import "../App.css";

class AnimeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      query: "/top/anime/1/tv",
      key: 0
    };
  }

  handleClick = (selected, query) => e => {
    this.setState({
      selected: selected,
      query: query,
      key: Math.random()
    });
    console.log(e);
  };

  render() {
    const { selected, query } = this.state;

    return (
      <React.Fragment>
        <ButtonGroup>
          <Button
            active={selected === 0}
            className="btn-outline-secondary"
            onClick={this.handleClick(0, "/top/anime/1/tv")}
          >
            Popular
          </Button>
          <Button
            active={selected === 1}
            className="btn-outline-secondary"
            onClick={this.handleClick(1, "/top/anime/1/upcoming")}
          >
            Upcoming
          </Button>
          <Button
            active={selected === 2}
            className="btn-outline-secondary"
            onClick={this.handleClick(2, "/top/anime/1/movie")}
          >
            Movie
          </Button>
        </ButtonGroup>
        <div className="anime-outer">
          <Anime key={this.state.key} changedQuery={query} />
        </div>
      </React.Fragment>
    );
  }
}

export default AnimeContainer;
