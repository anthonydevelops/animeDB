import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class myNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand tag={Link} to="/">
            AnimeDB
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Form inline>
                <FormGroup className="mr-3">
                  <Label for="search" hidden>
                    Search
                  </Label>
                  <Input
                    type=""
                    name="search"
                    id="mySearch"
                    placeholder="Search anime"
                  />
                </FormGroup>
              </Form>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Anime
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/manga">
                  Manga
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} size="lg" alt="sign-in" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
