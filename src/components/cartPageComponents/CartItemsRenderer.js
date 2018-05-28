import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { MdDeleteForever, MdAddCircleOutline } from 'react-icons/lib/md';
import { Row, Col, Button } from 'reactstrap';
import { startRemovePhoneFromCart } from '../../actions/cart';
import { startAddPhoneToWishlist } from '../../actions/wishlist';

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

const CartItemsRenderer = (props) => {
  return (
    <Col md="8">
      <h1 className="mb-3">
        {props.totalItems === 0? 'No products found in your shopping Cart' : 'Products in your shopping Cart:'} 
      </h1>
      {
        props.cart && props.cart.map(product => (
          props.phones.map(phone => {
            if (phone.id === product.id) {
              return (
              <Row className="mb-5">
                <Col md="12">
                  <Row className="border-bottom pb-5">
                    <Col md="3">
                      <Link to={`/phone/${phone.id}`}>
                        <img 
                          className="phones-images"
                          src={`./images/gallery/${phone.categoryId}/main.jpeg`}
                          alt={phone.name}
                        />
                      </Link>
                    </Col>
                    <Col md="9">
                      <div>
                        <h2 className="mb-0">{phone.name} ({product.color}, {phone.storage})</h2>
                        <small className="text-secondary">{phone.ram} RAM</small>
                        <div className="d-flex align-items-center">
                          <p className="font-weight-bold display-4 mr-3 mb-0">
                            {phone.price * parseInt(product.quantity)}€
                          </p>
                          <p className="text-success font-italic font-weight-bold"> 
                            SAVE UP {(phone.discount * parseInt(product.quantity)).toFixed(2)}€
                          </p>
                        </div>
                        <div className="d-flex align-items-start">
                          <p 
                            className="mb-0 mr-3 font-weight-bold color-container"
                            style={{backgroundColor: product.color.toLowerCase()}}>
                          </p>
                          <p>Amount: {product.quantity}</p>
                        </div>
                        <div>
                          <p className="lead">cpu {phone.cpu}</p>
                          <p className="lead">size {phone.size}</p>
                          <p className="lead">display {phone.display}</p>
                          <p className="lead">resolution {phone.resolution}</p>
                          <p className="lead">camera flash {phone.camera_flash}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <Button 
                            color="danger" 
                            size="lg" 
                            className="global-button d-flex align-items-center justify-content-center mr-3"
                            onClick={() => props.startRemovePhoneFromCart(phone.id)}>
                            <MdDeleteForever size={25} color="white" className="mr-3"/>
                            <p className="mb-0">REMOVE</p>
                          </Button>
                          <Button 
                            color="primary" 
                            size="lg"
                            className="global-button d-flex align-items-center justify-content-center mr-3"
                            onClick={() => {
                                props.onModalOpen();
                                props.startAddPhoneToWishlist(phone.id);
                              }
                            }>
                            <MdAddCircleOutline size={25} color="white" className="mr-3"/>
                            <p className="mb-0">ADD TO WISHLIST</p>
                          </Button>
                        </div>
                        <Modal
                          isOpen={props.isModalOpen}
                          style={customStyles}
                          contentLabel="Added To Wishlist"
                          onRequestClose={props.onModalClose}>
                          <div className="d-flex flex-column align-items-center">
                            <p>Product was added successfully to your wishlist.</p>
                            <Button 
                              className="global-button mt-3"
                              color="primary"
                              size="lg"
                              block
                              onClick={props.onModalClose}>
                              <p className="mb-0">CLOSE</p>
                            </Button>
                          </div>
                        </Modal>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              )
            }
          })
        ))
      }
    </Col>
  );
};

const mapDispatchtoProps = dispatch => ({
    startRemovePhoneFromCart(id) {
    dispatch(startRemovePhoneFromCart(id))
  },
    startAddPhoneToWishlist(id) {
    dispatch(startAddPhoneToWishlist(id))
  }
});

export default connect(null, mapDispatchtoProps)(CartItemsRenderer);