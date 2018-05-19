import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Cart from './Cart';
import { addPhoneToCart } from '../actions/phones';

const Sidebar = ({phone, addPhoneToCart, phones, cart}) => {
    return (
        <div className="text-center">
            <Cart />
            <h1 className="display-4">{phone.name}</h1>
            <h2 className="mb-5 mt-3 display-1">{phone.price}€</h2>
            <Button 
                color="primary" 
                size="lg" 
                block 
                onClick={() => {
                    addPhoneToCart(phone.id);
                }}
                >Add to Cart
            </Button>
            <Link to="/phones">
                <Button color="secondary" size="lg" block className="mt-3">Go to Homepage</Button>
            </Link>
            <div className="mt-5">
                {cart.length !== 0 && <p className="mb-4">Your products in shopping cart: </p> }
                {
                    cart.map(id => (
                        phones.map(phone => {
                            if (phone.id === id) {
                                return <p className="lead">{phone.name} - {phone.price}€</p>
                            }
                        })
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    phones: state.phones,
    cart: state.cart
});

const mapDispatchToProps = dispatch => ({
    addPhoneToCart(id) {
        dispatch(addPhoneToCart(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);