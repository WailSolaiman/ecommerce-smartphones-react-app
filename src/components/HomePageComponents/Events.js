import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { addPhoneToCart } from '../../actions/cart';

const Events = (props) => {
    return (
        <div>
            <div className="d-flex">
                <Button
                    outline
                    color="primary"
                    className="mr-3"
                    block
                    onClick={() => {
                        props.addPhoneToCart(props.phone.id);
                    }}>
                    ADD TO CART
                </Button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addPhoneToCart(id) {
        dispatch(addPhoneToCart(id))
    }
});

export default connect(null, mapDispatchToProps)(Events);