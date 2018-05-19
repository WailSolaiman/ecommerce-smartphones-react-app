import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { fetchPhone } from '../actions/phones';
import PhoneImageGallery from './PhonePageComponents/PhoneImageGallery';
import PhoneMainInfos from './PhonePageComponents/PhoneMainInfos';
import PhoneSpecifications from './PhonePageComponents/PhoneSpecifications';
import PhoneRatings from './PhonePageComponents/PhoneRatings';

class PhonePage extends React.Component {

    componentDidMount() {
        this.props.fetchPhone(this.props.match.params.id);
    }

    renderContent = () => {
        return (
            <Col md="12">
                <Row>
                    <PhoneImageGallery />
                    <PhoneMainInfos />
                    <PhoneSpecifications />
                    <PhoneRatings />
                </Row>
            </Col>
        );
    }

    render() {
        const { phone } = this.props;
        return (
            <Container>
                <Row className="my-5">
                    { phone && this.renderContent() }
                </Row>
            </Container>
        );
    }
};

const mapStateToProps = (state) => ({
    phone: state.phone
});

const mapDispatchToProps = (dispatch) => ({
    fetchPhone(id) {
        dispatch(fetchPhone(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhonePage);