import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { fetchPhone } from '../actions/phones';
import PhoneImageGallery from './PhonePageComponents/PhoneImageGallery';
import PhoneMainInfos from './PhonePageComponents/PhoneMainInfos';
import PhoneSpecifications from './PhonePageComponents/PhoneSpecifications';
import PhoneRatings from './PhonePageComponents/PhoneRatings';
import LoadingPage from './LoadingPage';

class PhonePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasRendered: true
        };
    }

    componentDidMount() {
        this.props.fetchPhone(this.props.match.params.id);
    }

    renderContent = () => {
        if (this.state.hasRendered) {
            setTimeout(() => {
                this.setState(() => ({ hasRendered: false }))
            }, 1000);
            return <LoadingPage />
        }   
        return (
            <Col md="12">
                <Row>
                    <PhoneImageGallery />
                    <Col sm="12" md="7">
                        <Row>
                            <PhoneMainInfos />
                            <PhoneSpecifications />
                            <PhoneRatings />
                        </Row>
                    </Col>
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