import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
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
      return <Loader />;
    }

    return (
      <MangaGrid>
        {manga.map(show => {
          return (
            <div style={{ textAlign: "center" }} key={show.mal_id}>
              <MangaImage src={show.image_url} alt={show.title} />
              <MangaTitle>{show.title}</MangaTitle>
            </div>
          );
        })}
      </MangaGrid>
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

const MangaGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`;

export const MangaImage = styled.img`
  box-shadow: 0 0 15px white;
  border-radius: 8px;
  height: 13rem;
  width: 9rem;
`;

export const MangaTitle = styled.h5`
  color: white;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export default Manga;
