import React from 'react';
import { Row, Col } from 'reactstrap';

const Storage = (props) => {
  return (
    <Col md="12">
      <Row>
        <Col md="2">
          <p>Storage</p>
        </Col>
        <Col md="10">
          <ul className="d-flex list-unstyled">
            <li><p className="mb-0 mr-3 font-weight-bold">{props.phone.storage}</p></li>
          </ul>
        </Col>  
      </Row>
    </Col>
  );
};

export default Storage;