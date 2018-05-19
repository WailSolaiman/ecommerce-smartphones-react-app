import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';
import { filterPhonesAfterName } from '../../actions/phones';
import { Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Badge } from 'reactstrap';

class InputGroups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    onChangeSearchedText = (event) => {
        event.preventDefault();
        const text = event.target.value;
        this.setState(() => ({ text }));
        this.props.filterPhonesAfterName(text);
    }

    render() {
        return (
            <Row>
                <Col sm="12" md="9">
                    <InputGroup size="lg">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Search your Phone!</InputGroupText>
                        </InputGroupAddon>
                        <Input value={this.state.text} onChange={this.onChangeSearchedText} />
                    </InputGroup>
                </Col>
                <Col sm="12" md="3">
                    <Link to="/cartdetails">
                        <p className="float-right">
                            <MdAddShoppingCart size={30} color="black" />
                            <span className="mr-3">Shopping Cart</span>
                            <Badge color="primary">{this.props.cart.length}</Badge>
                        </p>
                    </Link>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    filterPhonesAfterName(text) {
        dispatch(filterPhonesAfterName(text))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(InputGroups);