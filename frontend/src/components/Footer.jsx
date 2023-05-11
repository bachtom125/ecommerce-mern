// import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Jumanji</Col>
          <Col className="text-center py-3">Conditions of Use</Col>
          <Col className="text-center py-3">Privacy Notice</Col>
        </Row>
        <Row>
          <Col className="text-center py-3">@1999-2023, Jumanji.com, Inc</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
