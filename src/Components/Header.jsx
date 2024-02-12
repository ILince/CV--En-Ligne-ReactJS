
import "./HeaderStyle.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <header>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        variant="dark"
        className="bg-body-tertiary navbar sticky-top"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/home">
              <img
                alt="Logo représentant 3 vagues."
                src="src/assets/Images/Flavicon.png"
                width="30"
                height="30"
                className="logo"
              />
            </Link>
            JOHN DOE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavLink to="/home" className="linkStyle">
                Accueil
              </NavLink>
              <NavLink to="/assistance" className="linkStyle">
                services
              </NavLink>
              <NavLink to="/portfolio" className="linkStyle">
                Réalisations
              </NavLink>
              <NavLink to="/blog" className="linkStyle">
                Blog
              </NavLink>
              <NavLink to="/contact" className="linkStyle">
                Me contacter
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default App;
