import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <Container>
    <Row>
      <Col md="3">
        .col-3
      </Col>
      <Col md="9">
        <p>Dashboard page content</p>
        <Link to="/phones">Phones</Link>
      </Col>
    </Row>
  </Container>
);

export default DashboardPage;
