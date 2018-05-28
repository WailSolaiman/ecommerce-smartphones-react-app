import React from 'react';
import { Row, Col } from 'reactstrap';

const Highlights = (props) => {
  return (
    <Col md="12">
      <Row>
        <Col md="2">
          <p>Highlights</p>
        </Col>
        <Col md="10">
          <ul>
            <li><p className="mb-0"><span className="font-weight-bold">cpu:</span> {props.phone.cpu}</p></li>
            <li><p className="mb-0"><span className="font-weight-bold">camera:</span> {props.phone.camera}</p></li>
            <li><p className="mb-0"><span className="font-weight-bold">size:</span> {props.phone.size}</p></li>
          </ul>
        </Col>
      </Row>
    </Col>
  );
};

export default Highlights;