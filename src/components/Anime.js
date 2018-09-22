import React, { PureComponent } from "react";
import styled from "styled-components";
import { Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";

const API = "https://api.jikan.moe/v3";
const QUERY = "/top/anime/1/tv?subtype=tv";

class Anime extends PureComponent {
  state = {
    animes: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(API + QUERY);
      const anime = await res.json();
      this.setState({
        animes: anime.top
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { animes } = this.state;

    return (
      <AnimeGrid>
        {animes.map(show => {
          return (
            <Card className="w-75 h-25 myCard" key={show.mal_id}>
              <AnimeImage src={show.image_url} alt={show.title} />
              <CardBody className="text-center">
                <CardTitle className="text-white">{show.title}</CardTitle>
                <CardSubtitle>{show.episodes} Videos</CardSubtitle>
              </CardBody>
            </Card>
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
`;

export default Anime;
