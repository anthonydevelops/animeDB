import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "../App.css";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      query: "/top/anime/1/tv"
    };
  }

  handleClick = (selected, query) => {
    this.setState({
      selected: selected,
      query: query
    });

    this.props.handleQuery(this.state.query);
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="Anime">
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
      </div>
      //   <div className="Anime">
      //   <Anime key={this.state.key} changedQuery={query} />
      // </div>
    );
  }
}

export default Selector;
