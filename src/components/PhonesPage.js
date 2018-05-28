import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { saveToDB, fetchPhonesFromDB, fetchPhones } from '../actions/phones';
import { startLoadPhoneToCart } from '../actions/cart';
import { startLoadPhoneToWishlist } from '../actions/wishlist';
import InputGroups from './homePageComponents/InputGroups';
import PhonesRenderer from './homePageComponents/PhonesRenderer';
import LoadingPage from './LoadingPage';

class PhonesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasRendered: true,
            phones: []
        };
    }

    componentDidMount() {
        this.props.fetchPhonesFromDB();
        this.props.startLoadPhoneToCart();
        this.props.startLoadPhoneToWishlist();
        window.scrollTo(0, 0);
    }

    onLoadPhones = (phones) => {
        this.setState(() => ({ phones }));
    };

    render() {
        if (this.state.hasRendered) {
            setTimeout(() => {
                this.setState(() => ({ hasRendered: false }))
            }, 1000);
            return <LoadingPage />
        }
        return <Container className="my-5">
            <InputGroups onLoadPhones={this.onLoadPhones} />
            <PhonesRenderer phones={this.state.phones} />
        </Container>;
    }
}

const mapDispatchToProps = (dispatch) => ({
    saveToDB() {
        dispatch(saveToDB())
    },
    fetchPhonesFromDB() {
        dispatch(fetchPhonesFromDB())
    },
    fetchPhones() {
        dispatch(fetchPhones())
    },
    startLoadPhoneToCart() {
        dispatch(startLoadPhoneToCart())
    },
    startLoadPhoneToWishlist() {
        dispatch(startLoadPhoneToWishlist())
    }
});

export default connect(null, mapDispatchToProps)(PhonesPage);