import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Incomplete</h1>
        </Col>
        <Col>
          <h1>Complete</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
