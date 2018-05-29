import React from 'react';
import { Row, Col } from 'reactstrap';
import PhonesMainContent from './PhonesMainContent';

const PhonesRenderer = (props) => {
    return (
        <Row>
            {
                props.phones && props.phones.map(phone => (
                    <Col sm="12" md="3" className="py-5 home-item-content" key={phone.id}>
                        <PhonesMainContent phone={phone} />
                    </Col>
                ))
            }
        </Row>
    );
};

export default PhonesRenderer;