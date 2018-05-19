import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import PhonesMainContent from './PhonesMainContent';
import Events from './Events';

class PhonesRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row>
                { 
                    this.props.phones.map(phone => (
                        <Col sm="12" md="3" className="py-5 home-item-content" key={phone.id}>      
                            <PhonesMainContent phone={phone} />
                            <Events phone={phone} />  
                        </Col>
                    ))
                }
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    phones: state.phones
});

export default connect(mapStateToProps)(PhonesRenderer);