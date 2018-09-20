import React from "react";
import "../App.css";
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
          <NavbarBrand href="/">AnimeDB</NavbarBrand>
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
                <NavLink active href="/">
                  Anime
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
