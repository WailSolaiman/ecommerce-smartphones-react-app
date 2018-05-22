import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MdLocalGroceryStore, MdChevronLeft } from 'react-icons/lib/md';
import { addPhoneToCart, editPhoneInCart } from '../../../actions/phones';

const AddToCartAction = (props) => {
  return (
    <div className="mt-3 d-flex justify-content-between">
      <Button 
        className="addToCart d-flex align-items-center" 
        color="success"
        onClick={() => {
          if (props.selectedColor === '' || props.selectedQuantity === 0) {
            props.onError('please select product color and amount.');
          }
          else {
            let isExistinCart = true;
            props.onError('');
            props.cart && props.cart.map(item => {
              if (item.id === props.phone.id) {
                const product = {
                  color: props.selectedColor,
                  quantity: props.selectedQuantity
                }
                props.editPhoneInCart(item.id, product);
                isExistinCart = false;
              }
            });
            if(isExistinCart) {
              const product = {
                id: props.phone.id,
                color: props.selectedColor,
                quantity: props.selectedQuantity
              }
              props.addPhoneToCart(product);
            }
          }
        }}>
        <MdLocalGroceryStore size={25} color="white" className="mr-3"/>
        ADD TO CART
      </Button>
      <Link to="/phones">
        <Button 
          className="continueShopping d-flex align-items-center"
          color="info">
          <MdChevronLeft size={25} color="white" className="mr-3"/>
          <p className="mb-0">SHOPPING</p>
        </Button>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPhoneToCart(product) {
    dispatch(addPhoneToCart(product))
  },
  editPhoneInCart(id, update) {
    dispatch(editPhoneInCart(id, update))
  }
});

export default connect(null, mapDispatchToProps)(AddToCartAction);