import React from 'react';
import { Container, Row } from 'reactstrap';

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <div className="text-center w-100 bg-dark">
          <p className="my-3 text-white">Wail Solaiman &copy; 2018</p>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;