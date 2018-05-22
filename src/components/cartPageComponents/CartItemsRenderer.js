import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { removePhoneFromCart } from '../../actions/phones';

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
                        <Button 
                          color="primary" 
                          size="lg" 
                          className="mr-3"
                          onClick={
                            () => props.removePhoneFromCart(phone.id)
                          }>
                          REMOVE
                        </Button>
                        <Button color="info" size="lg">MOVE TO WISHLIST</Button>
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
  removePhoneFromCart(id) {
    dispatch(removePhoneFromCart(id))
  }
});

export default connect(null, mapDispatchtoProps)(CartItemsRenderer);