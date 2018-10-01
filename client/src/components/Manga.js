import React, { Component } from "react";
import "../App.css";

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
        <div style={{ textAlign: "center" }}>
          <div className="lds-dual-ring" />
        </div>
      );
    }

    return (
      <div className="Grid">
        {manga.map(show => {
          return (
            <div style={{ textAlign: "center" }} key={show.mal_id}>
              <img className="Image" src={show.image_url} alt={show.title} />
              <h5 className="Title">{show.title}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Manga;
