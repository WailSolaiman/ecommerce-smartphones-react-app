import React from 'react';
import { Row, Col } from 'reactstrap';
import MainInformations from './phoneMainInfos/MainInformations';
import Highlights from './phoneMainInfos/Highlights';
import Colors from './phoneMainInfos/Colors';
import Amounts from './phoneMainInfos/Amounts';
import Storage from './phoneMainInfos/Storage';

const PhoneMainInfos = (props) => {
  return (
    <Col md="12">
      <MainInformations phone={props.phone} />
      <Row>
        <Highlights phone={props.phone} />
        <Colors phone={props.phone} selectedColor={props.selectedColor} />
        <Amounts selectedQuantity={props.selectedQuantity} />
        <Storage phone={props.phone} />
      </Row>
      <p className="mb-5 lead">{props.phone.description}</p>
    </Col>
  );
}

export default PhoneMainInfos;