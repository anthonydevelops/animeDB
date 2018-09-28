import React, { Component } from "react";
import styled from "styled-components";
import { Card, CardTitle, CardBody } from "reactstrap";
import "../../App.css";

const API = "https://api.jikan.moe/v3";
const QUERY = "/top/manga/1/manga";

class Manga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manga: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const res = await fetch(API + QUERY);
      const manga = await res.json();
      this.setState({
        manga: manga.top,
        isLoading: false
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { manga, isLoading } = this.state;

    if (isLoading) {
      return (
        <LoadDiv>
          <div className="lds-dual-ring" />;
        </LoadDiv>
      );
    }

    return (
      <AnimeGrid>
        {manga.map(show => {
          return (
            <Card className="w-75 h-25 myCard" key={show.mal_id}>
              <AnimeImage src={show.image_url} alt={show.title} />
              <CardBody className="text-center">
                <CardTitle className="text-white">{show.title}</CardTitle>
              </CardBody>
            </Card>
          );
        })}
      </AnimeGrid>
    );
  }
}

const LoadDiv = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

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

export default Manga;
