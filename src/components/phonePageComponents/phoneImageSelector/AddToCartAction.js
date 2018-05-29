import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MdLocalGroceryStore, MdChevronLeft } from 'react-icons/lib/md';
import { startAddPhoneToCart, startEditPhoneInCart } from '../../../actions/cart';

const AddToCartAction = (props) => {
  return (
    <div className="mt-3 d-flex justify-content-between">
      <Button 
        className="addToCart d-flex align-items-center" 
        color={props.cart.some(item => item.id === props.phone.id)? 'secondary' : 'success'}
        disabled={props.cart.some(item => item.id === props.phone.id)}
        onClick={() => {
          if (props.selectedColor === '' || props.selectedQuantity === 0) {
            props.onError('please select product color and amount.');
          }
          else {
            let isExistInCart = true;
            props.onError(undefined);
            props.cart && props.cart.map(item => {
              if (item.id === props.phone.id) {
                const product = {
                  id: props.phone.id,
                  color: props.selectedColor,
                  quantity: props.selectedQuantity
                };
                props.startEditPhoneInCart(item.id, product);
                  isExistInCart = false;
              }
            });
            if(isExistInCart) {
              const product = {
                id: props.phone.id,
                color: props.selectedColor,
                quantity: props.selectedQuantity
              };
              props.startAddPhoneToCart(product);
            }
          }
        }}>
            <MdLocalGroceryStore size={25} color="white" className="mr-3"/>
            <p className="mb-0">{props.cart.some(item => item.id === props.phone.id)? 'ADDED TO CART' : 'ADD TO CART'}</p>
      </Button>
      <Button 
        className="continueShopping"
        color="info">
        <Link to="/phones" className="d-flex align-items-center" style={{width: 'inherit'}}>
          <MdChevronLeft size={25} color="white" className="mr-3"/>
          <p className="text-white mb-0">SHOPPING</p>
        </Link>
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
    startAddPhoneToCart(product) {
    dispatch(startAddPhoneToCart(product))
  },
    startEditPhoneInCart(id, update) {
    dispatch(startEditPhoneInCart(id, update))
  }
});

export default connect(null, mapDispatchToProps)(AddToCartAction);