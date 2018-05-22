import React from 'react';
import { Container, Col, Jumbotron } from 'reactstrap';
import PhoneSpecificationsGeneral from './PhoneSpecificationsGeneral';
import PhoneSpecificationsDisplay from './PhoneSpecificationsDisplay';
import PhoneSpecificationsCamera from './PhoneSpecificationsCamera';

const PhoneSpecifications = (props) => {
    return (
        <Col md="12">
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="mb-5">Specifications</h1>
                        <PhoneSpecificationsGeneral phone={props.phone} />
                        <PhoneSpecificationsDisplay phone={props.phone} />
                        <PhoneSpecificationsCamera phone={props.phone} />
                    </Container>
                </Jumbotron>
            </div>
        </Col>
    );
}

export default PhoneSpecifications;