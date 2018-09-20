import React, { Component } from "react";
import "../App.css";
import { Row, Col, Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";

const API = "https://api.jikan.moe/v3";
const QUERY = "/top/anime/1/tv?subtype=tv";

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
      <Row className="myRow">
        {anime.map(show => {
          return (
            <Col xs="12" md="3">
              <Card className="w-75 h-25 myCard" key={show.mal_id}>
                <img src={show.image_url} alt={show.title} />
                <CardBody className="text-center">
                  <CardTitle>{show.title}</CardTitle>
                  <CardSubtitle>{show.episodes} Videos</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Anime;
