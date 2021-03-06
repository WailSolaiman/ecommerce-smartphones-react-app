import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { MdDeleteForever } from 'react-icons/lib/md';
import { startLoadPhoneToWishlist, startRemovePhoneFromWishlist } from '../actions/wishlist';
import LoadingPage from './LoadingPage';

class WishlistPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasRendered: true
        };
    }

    render() {
        if (this.state.hasRendered) {
            setTimeout(() => {
                this.setState(() => ({ hasRendered: false }))
            }, 1000);
            return <LoadingPage />
        }
        return (
            <Container className="wishlist">
                <Row>
                    {this.props.wishlist.length === 0? <h1 className="my-3">Your Wishlist is Empty</h1> : <h1 className="my-3">Your Wishlist</h1>}
                </Row>
                <Row>
                    {
                        this.props.wishlist && this.props.wishlist.map(item => (
                            this.props.phones.map(phone => {
                                if (phone.id === item.id) {
                                    return (
                                        <Col sm="12" md="6">
                                            <Row className="my-5">
                                                <Col sm="12" md="4">
                                                    <Link to={`/phone/${phone.id}`}>
                                                        <img
                                                            className="phones-images"
                                                            src={`./images/gallery/${phone.categoryId}/main.jpeg`}
                                                            alt={phone.name}
                                                        />
                                                    </Link>
                                                </Col>
                                                <Col sm="12" md="8">
                                                    <h2 className="mb-0">{phone.name} ({phone.storage})</h2>
                                                    <small className="text-secondary">{phone.ram} RAM</small>
                                                    <div className="d-flex align-items-center">
                                                        <p className="font-weight-bold display-4 mr-3 mb-0">
                                                            {phone.price}€
                                                        </p>
                                                        <p className="text-success font-italic font-weight-bold">
                                                            SAVE UP {(phone.discount)}€
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="lead">cpu {phone.cpu}</p>
                                                        <p className="lead">size {phone.size}</p>
                                                        <p className="lead">display {phone.display}</p>
                                                        <p className="lead">resolution {phone.resolution}</p>
                                                        <p className="lead">camera flash {phone.camera_flash}</p>
                                                    </div>
                                                    <Button
                                                        color="danger"
                                                        size="lg"
                                                        className="global-button d-flex align-items-center justify-content-center mr-3"
                                                        onClick={() => this.props.startRemovePhoneFromWishlist(phone.id)}>
                                                        <MdDeleteForever size={25} color="white" className="mr-3"/>
                                                        <p className="mb-0">REMOVE FROM WISHLIST</p>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    );
                                }
                            })
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
  phones: state.phones,
  wishlist: state.wishlist
});

const mapDispatchToProps = dispatch => ({
    startLoadPhoneToWishlist() {
        dispatch(startLoadPhoneToWishlist())
    },
    startRemovePhoneFromWishlist(id) {
    dispatch(startRemovePhoneFromWishlist(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage);