import { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className="text-bg-danger">
          <Container>
            <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {this.props.products.map((data, i) => (
                <NavLink key={i} className="ms-auto d-flex gap-3">
                  <Button
                    variant="light"
                    onClick={() => {
                      this.props.increment(data);
                    }}
                  >
                    {data.name}
                  </Button>
                </NavLink>
              ))}
              <Nav className="ms-auto">
                <Nav.Link className="d-flex gap-2">
                  <FaCartShopping className="text-black mt-1" />
                  <span>{this.props.itemsNo()}</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
