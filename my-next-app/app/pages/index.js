// pages/index.js
import React from 'react';
import { Container, Navbar, Nav, Jumbotron, Button, Footer } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCode, faUsers } from '@fortawesome/free-solid-svg-icons';

const WelcomePage = () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron>
        <h1>Welcome to My App</h1>
        <p>
          This is a simple and responsive landing page created with Next.js, react-bootstrap, and FontAwesome.
        </p>
        <p>
          <Button variant="primary">Get Started</Button>
        </p>
      </Jumbotron>

      <Container>
        <h2>Features</h2>
        <p>
          <FontAwesomeIcon icon={faCoffee} /> Feature 1: Enjoy a cup of coffee.
        </p>
        <p>
          <FontAwesomeIcon icon={faCode} /> Feature 2: Write some code.
        </p>
        <p>
          <FontAwesomeIcon icon={faUsers} /> Feature 3: Connect with users.
        </p>
      </Container>

      <Footer className="mt-5">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default WelcomePage;
