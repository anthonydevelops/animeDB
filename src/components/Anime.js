import React, { Component } from "react";
import "../App.css";
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardDeck,
  CardBody,
  Button
} from "reactstrap";

const API = "https://api.jikan.moe/v3";
const QUERY = "/top/anime";

class Anime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anime: []
    };
  }

  componentDidMount() {
    fetch(API + QUERY)
      .then(res => res.json())
      .then(data =>
        this.setState({
          anime: data.top
        })
      );
  }

  render() {
    const { anime } = this.state;
    return (
      <CardDeck>
        {anime.map(show => {
          return (
            <Card className="myCard" key={show.mal_id}>
              <CardImg
                top
                width="100%"
                className="myImg img-fluid"
                src={show.image_url}
              />
              <CardBody>
                <CardTitle>{show.title}</CardTitle>
                <CardSubtitle>{show.score}</CardSubtitle>
                <CardText>
                  Episodes: {show.episodes} <br />
                  Start Date: {show.start_date} <br />
                  End Date: {show.end_date}
                </CardText>
                <Button color="info" href={show.url}>
                  Like
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </CardDeck>
    );
  }
}

// <Card key={show.mal_id}>
//   <CardImg top width="100%" src={show.image_url} />
//   <CardBody>
//     <CardTitle>{show.title}</CardTitle>
//     <CardSubtitle>{show.score}</CardSubtitle>
//     <CardText>
//       Episodes: {show.episodes} <br />
//       Start Date: {show.start_date} <br />
//       End Date: {show.end_date}
//     </CardText>
//     <Button color="info" href={show.url}>
//       Like
//     </Button>
//   </CardBody>
// </Card>

export default Anime;
