import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button } from 'reactstrap';
import Modal from 'react-modal';
import { MdChevronLeft, MdAccountBalance } from 'react-icons/lib/md';
import {
    calculatePriceWithAmount,
    calculateDiscountWithAmount
} from '../../selectors/phones';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class ButtonsGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onButtonClick = () => {
    this.setState(() => ({ isOpen: true }));
  };

  onModalClose = () => {
      this.setState(() => ({ isOpen: false }));
  };

  render() {
      return (
          <Col md="12">
              <div className="d-flex">
                  <Button
                      className="continueShopping d-flex align-items-center justify-content-center mr-3"
                      color="info">
                      <Link to="/phones" className="d-flex align-items-center" style={{width: 'inherit'}}>
                          <MdChevronLeft size={25} color="white" className="mr-3"/>
                          <p className="text-white mb-0">SHOPPING</p>
                      </Link>
                  </Button>
                  {
                      this.props.totalItems > 0? (
                          <Button
                              className="placeOrder d-flex align-items-center justify-content-center"
                              color="success"
                              onClick={this.onButtonClick}
                          >
                              <MdAccountBalance size={25} color="white" className="mr-3"/>
                              <p className="mb-0">PLACE ORDER</p>
                          </Button>
                      ) : (<p>{}</p>)
                  }
                  <Modal
                      isOpen={this.state.isOpen}
                      style={customStyles}
                      contentLabel="Added To Wishlist"
                      onRequestClose={this.onModalClose}>
                      <div>
                          <p>Products that you purchased: </p>
                          <ul className="placeOrderModal d-flex flex-column p-0">
                              {
                                  this.props.cart && this.props.cart.map(product => (
                                      this.props.phones.map(phone => {
                                          if (product.id === phone.id) {
                                              return (
                                                  <li className="d-flex flex-row justify-content-between lead">
                                                      <h3 className="text-success mr-3">{phone.name}</h3>
                                                      <p className="text-success mr-3">{product.quantity}x</p>
                                                      <h3 className="mr-3">{phone.price}€</h3>
                                                  </li>
                                              );
                                          }
                                      })
                                  ))
                              }
                          </ul>
                          <p className="text-success font-weight-bold">Total Savings on this order(s): {calculateDiscountWithAmount(this.props.cart, this.props.phones)}€</p>
                          <p className="font-weight-bold">Amount Payable: <span className="text-success display-4">{calculatePriceWithAmount(this.props.cart, this.props.phones)}€</span></p>
                          <Button
                              className="global-button w-100 mt-3"
                              color="primary"
                              size="lg"
                              block
                              onClick={this.onModalClose}>
                              <p className="mb-0">CLOSE</p>
                          </Button>
                      </div>
                  </Modal>
              </div>
          </Col>
      );
  }
}

export default ButtonsGroup;