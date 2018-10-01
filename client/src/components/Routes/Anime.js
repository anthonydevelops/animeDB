import React, { Component } from "react";
import "../../App.css";

const API = "https://api.jikan.moe/v3";
let BASE_QUERY = "/top/anime/1/tv";

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
    let QUERY = this.props.queryChange;

    if (QUERY.length > 0) {
      BASE_QUERY = QUERY;
    }

    try {
      const res = await fetch(API + BASE_QUERY);
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

    // Display loader while API renders
    if (isLoading) {
      return <div className="lds-dual-ring" />;
    }

    // Return grid of anime including images + title
    return (
      <div className="Grid">
        {animes.map(show => {
          return (
            <div key={show.mal_id}>
              <img className="Image" src={show.image_url} alt={show.title} />
              <div style={{ textAlign: "center" }}>
                <h5 className="Title">{show.title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Anime;
