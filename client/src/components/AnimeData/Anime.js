import React, { Component } from "react";
import styled from "styled-components";
import { Card, CardTitle, CardBody } from "reactstrap";
import "../../App.css";

const API = "https://api.jikan.moe/v3";

class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const QUERY = this.props.changedQuery;

    try {
      const res = await fetch(API + QUERY);
      const animes = await res.json();
      this.setState({
        animes: animes.top,
        isLoading: false
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { animes, isLoading } = this.state;

    if (isLoading) {
      return <div className="lds-dual-ring" />;
    }

    return (
      <AnimeGrid>
        {animes.map(show => {
          return (
            <React.Fragment>
              <Card className="w-75 h-25 myCard" key={show.mal_id}>
                <AnimeImage src={show.image_url} alt={show.title} />
                <CardBody className="text-center">
                  <CardTitle>{show.title}</CardTitle>
                </CardBody>
              </Card>
            </React.Fragment>
          );
        })}
      </AnimeGrid>
    );
  }
}

const AnimeGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`;

export const AnimeImage = styled.img`
  box-shadow: 0 0 15px white;
  height: 13rem;
`;

export default Anime;
