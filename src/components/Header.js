import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import profilePic from '../images/DionysioS.png';

export default function Header() {
  return (
    <header id="main-header">
      <Container fluid className="header-container">
        <Row className="justify-content-md-center">
          <Col>
            <Image src={profilePic} roundedCircle fluid className="mx-auto d-block" width="220px" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="text-center mx-auto d-block font-weight">
            <h5>Olá, eu sou o Dionysio</h5>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="text-center text-uppercase mx-auto d-block">
            <h3 className="font-600">Desenvolvedor de Software Web</h3>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
