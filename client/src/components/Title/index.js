import React from "react";
import { Container, Row, Col } from "./../Grid";
import Jumbotron from "./../Jumbotron";

function Title() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1> (React) Google Books Lookup </h1>
            <h3> Search for & Save Books of Interest </h3>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Title;