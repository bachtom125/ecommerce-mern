// import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Jumanji</Col>
          <Col className="text-center py-3">
            <LinkContainer to="/conditions-of-use">
              <Nav.Link>Conditions of Use</Nav.Link>
            </LinkContainer>
          </Col>
          <Col className="text-center py-3">
            <LinkContainer to="/privacy-notice">
              <Nav.Link>Privacy Notice</Nav.Link>
            </LinkContainer>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">@1999-2023, Jumanji.com, Inc</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
