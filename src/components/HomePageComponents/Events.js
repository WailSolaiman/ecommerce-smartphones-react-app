import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { addPhoneToCart } from '../../actions/phones';

const Events = ({phone}) => {
    return (
        <div className="d-flex">
            <Button
                outline
                color="primary"
                className="mr-3"
                block
                onClick={() => {
                    this.props.addPhoneToCart(phone.id);
                }}>
                ADD TO CART
            </Button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addPhoneToCart(id) {
        dispatch(addPhoneToCart(id))
    }
});

export default connect(null, mapDispatchToProps)(Events);