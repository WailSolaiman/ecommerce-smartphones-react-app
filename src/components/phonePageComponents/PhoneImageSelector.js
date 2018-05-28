import React from 'react';
import { Col } from 'reactstrap';
import ImagesRenderer from './phoneImageSelector/ImagesRenderer';
import AddToCartAction from './phoneImageSelector/AddToCartAction';
import AlertRenderer from './phoneImageSelector/AlertRenderer';

class PhoneImageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      isModalOpen: false
    };
  }

  onError = (error) => {
    if (error === undefined) {
      this.setState(() => ({ error, isModalOpen: true }));
    }
    else {
      this.setState(() => ({ error, isModalOpen: false }));
    }
  };

  onModalClose = () => {
    this.setState(() => ({ isModalOpen: false }));
  };

  render() {
    return (
      <Col sm="12" md="5">
        <ImagesRenderer 
          phone={this.props.phone}
          selectedColor={this.props.selectedColor}
        />
        <AddToCartAction 
          onError={this.onError}
          phone={this.props.phone}
          cart={this.props.cart}
          selectedColor={this.props.selectedColor}
          selectedQuantity={this.props.selectedQuantity}
        />
        <AlertRenderer 
          error={this.state.error}
          isModalOpen={this.state.isModalOpen}
          onModalClose={this.onModalClose}
          phone={this.props.phone}
          cart={this.props.cart}
        />
      </Col>
    );
  }
}

export default PhoneImageSelector;