import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { MdLocalGroceryStore, MdEuroSymbol } from 'react-icons/lib/md';
import { Col, Button, Alert } from 'reactstrap';
import { addPhoneToCart } from '../../actions/phones';

const PhoneImageGallery = (props) => {
    return (
        <Col sm="12" md="5">
            <ImageGallery showPlayButton={false} items={
                props.phone.gallery && props.phone.gallery.map((item) => (
                    {
                        original: `../images/gallery/${props.phone.categoryId}${item.image}`,
                        thumbnail: `../images/gallery/${props.phone.categoryId}${item.image}`,
                    }
                ))
            } />
            <div className="mt-3 d-flex justify-content-between">
                <Button 
                    className="addToCart d-flex align-items-center" 
                    color="primary"
                    onClick={() => {
                        props.addPhoneToCart(props.phone.id);
                    }}>
                    <MdLocalGroceryStore size={25} color="white" className="mr-3"/>
                    ADD TO CART
                </Button>
                <Link to="/cartdetails">
                    <Button className="buyNow d-flex align-items-center" color="success">
                        <MdEuroSymbol size={25} color="white" className="mr-3"/>
                        BUY NOW
                    </Button>
                </Link>
            </div>
            {
                props.cart && props.cart.map(id => {
                    if (id === props.phone.id) {
                        return (
                            <Alert key={id} color="success" className="mt-5">
                                <h1 className="alert-heading">Well done!</h1>
                                <p className="mb-0">
                                    Product <span className="font-weight-bold">{props.phone.name}</span> was added successfully to your shopping cart.
                                </p>
                                <hr />
                                <p className="mb-0">
                                    Please click <Link to="/cartdetails" className="alert-link">here</Link> to go to your shopping cart
                                </p>
                            </Alert>
                        )
                    }
                })
            }
        </Col>
    );
}

const mapStateToProps = (state) => ({
    phone: state.phone,
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    addPhoneToCart(id) {
        dispatch(addPhoneToCart(id))
    }
})

export default connect (mapStateToProps, mapDispatchToProps)(PhoneImageGallery);