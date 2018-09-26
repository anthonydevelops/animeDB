import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import Anime from "./AnimeData/Anime.js";
import styled from "styled-components";
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

  handleClick = (selected, query) => {
    this.setState({
      selected: selected,
      query: query,
      key: Math.random()
    });
  };

  render() {
    const { selected, query } = this.state;

    return (
      <React.Fragment>
        <AnimeTab>
          <ButtonGroup>
            <Button
              active={selected === 0}
              outline
              color="secondary"
              className="text-black"
              onClick={() => this.handleClick(0, "/top/anime/1/tv")}
            >
              Popular
            </Button>
            <Button
              active={selected === 1}
              outline
              color="secondary"
              className="text-black"
              onClick={() => this.handleClick(1, "/top/anime/1/upcoming")}
            >
              Upcoming
            </Button>
            <Button
              active={selected === 2}
              outline
              color="secondary"
              className="text-black"
              onClick={() => this.handleClick(2, "/top/anime/1/movie")}
            >
              Movie
            </Button>
          </ButtonGroup>
          <AnimeTab>
            <Anime key={this.state.key} changedQuery={query} />
          </AnimeTab>
        </AnimeTab>
      </React.Fragment>
    );
  }
}

const AnimeTab = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

export default AnimeContainer;
