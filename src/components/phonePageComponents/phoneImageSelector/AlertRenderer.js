import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Alert } from 'reactstrap';
import Modal from 'react-Modal';
import { MdLocalGroceryStore, MdChevronLeft } from 'react-icons/lib/md';

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

const AlertRenderer = (props) => {
  return (
    <div>
      {
        !!props.error && <Alert color="danger" className="mt-3">{props.error}</Alert>
      }
      {
        props.cart && props.cart.map(product => {
          if (product.id === props.phone.id) {
            return (
              <Modal
                key={product.id}
                isOpen={props.isModalOpen}
                style={customStyles}
                contentLabel="Added To Cart"
                onRequestClose={props.onModalClose}>
                <div>
                  <p>Product ({props.phone.name}) was added successfully to your shopping cart.</p>
                  <p>Color: {product.color}, Amount: {product.quantity}</p>
                  <div className="mt-3 d-flex justify-content-center">
                    <Button 
                      className="addToCartModal mr-3"
                      color="primary">
                      <Link to="/cartdetails" className="d-flex align-items-center" style={{width: 'inherit'}}>
                        <MdLocalGroceryStore size={25} color="white" className="mr-3"/>
                        <p className="text-white mb-0">SHOPPING CART</p>
                      </Link>
                    </Button>
                    <Button 
                      className="addToCartModal d-flex align-items-center"
                      color="info"
                      block
                      onClick={props.onModalClose}>
                      <MdChevronLeft size={25} color="white" className="mr-3"/>
                      <p className="mb-0">CONTINUE SHOPPING</p>
                    </Button>
                  </div>
                </div>
              </Modal>
            );
          }
        })
      }
    </div>
  );
}

export default AlertRenderer;