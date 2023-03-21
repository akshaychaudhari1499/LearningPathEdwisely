import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import Banner from "../Assets/Banner.png";
import "./NavbarComp.css";
function NavbarComp() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <Container fluid>
        <Nav.Link as={Link} to="/">
          <img src={logo} alt='logo'></img>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/courses">
              <h3 className="routes">Courses</h3>
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              <h3> Profile</h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
