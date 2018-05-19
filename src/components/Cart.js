import React from 'react';
import { connect } from 'react-redux';
import { getTotalCartPrice } from '../selectors/phones';

const Cart = (props) => {
    return (
        <div className="text-center">
            <img className="img-thumbnail" src="../images/cart.jpg" alt="Cart" />
            <p className="lead mt-3">
                {props.cartTotalItems === 0? 'No items found' : `Item(s) in your cart: ${props.cartTotalItems} `} 
                {props.cartTotalPrice === 0? '' : `- Total amount : ${props.cartTotalPrice}€`}
            </p>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cartTotalItems: state.cart.length,
        cartTotalPrice: getTotalCartPrice(state.cart)
    }
}

export default connect(mapStateToProps)(Cart);