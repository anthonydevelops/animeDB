import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
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
      return <Loader />;
    }

    return (
      <AnimeGrid>
        {animes.map(show => {
          return (
            <div key={show.mal_id}>
              <AnimeImage src={show.image_url} alt={show.title} />
              <div style={{ textAlign: "center" }}>
                <AnimeTitle>{show.title}</AnimeTitle>
              </div>
            </div>
          );
        })}
      </AnimeGrid>
    );
  }
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  margin-top: 4rem;

  ::after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate360} 1.2s linear infinite;
  }
`;

export const AnimeGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`;

export const AnimeImage = styled.img`
  box-shadow: 0 0 15px white;
  border-radius: 8px;
  height: 13rem;
  width: 9rem;
`;

export const AnimeTitle = styled.h5`
  color: white;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export default Anime;
