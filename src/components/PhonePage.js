import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { fetchPhoneFormDB } from '../actions/phone';
import PhoneImageSelector from './phonePageComponents/PhoneImageSelector';
import PhoneMainInfos from './phonePageComponents/PhoneMainInfos';
import PhoneSpecifications from './phonePageComponents/PhoneSpecifications';
import PhoneImageGallery from './phonePageComponents/PhoneImageGallery';
import PhoneRatings from './phonePageComponents/PhoneRatings';
import LoadingPage from './LoadingPage';

class PhonePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasRendered: true,
      selectedColor: '',
      selectedQuantity: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPhoneFormDB(this.props.match.params.id);
    console.log()
  }

  onSelectColor = (color) => {
    this.setState(() => ({ selectedColor: color }));
  };

  onSelectQuantity = (quantity) => {
    this.setState(() => ({ selectedQuantity: quantity }));
  };

  renderContent = () => {
    if (this.state.hasRendered) {
      setTimeout(() => {
        this.setState(() => ({ hasRendered: false }))
      }, 1500);
      return <LoadingPage />
    }
      return <Col md={"12"}>
          <Row>
              <PhoneImageSelector
                  phone={this.props.phone}
                  cart={this.props.cart}
                  selectedColor={this.state.selectedColor}
                  selectedQuantity={this.state.selectedQuantity}/>
              <Col sm={"12"} md={"7"}>
                  <Row>
                      <PhoneMainInfos
                          phone={this.props.phone}
                          selectedColor={this.onSelectColor}
                          selectedQuantity={this.onSelectQuantity}/>
                      <PhoneSpecifications phone={this.props.phone}/>
                      <PhoneImageGallery phone={this.props.phone}/>
                      <PhoneRatings phone={this.props.phone}/>
                  </Row>
              </Col>
          </Row>
      </Col>;
  };

  render() {
    const { phone } = this.props;
      return <Container>
          <Row className={"my-5"}>
              {phone && this.renderContent()}
          </Row>
      </Container>;
  }
}

const mapStateToProps = (state) => ({
    phone: state.phone,
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    fetchPhoneFormDB(id) {
    dispatch(fetchPhoneFormDB(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonePage);