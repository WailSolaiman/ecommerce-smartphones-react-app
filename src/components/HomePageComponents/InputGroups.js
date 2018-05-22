import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';
import { Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Badge } from 'reactstrap';
import { filterPhonesAfterName } from '../../actions/phones';

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
              <Col md="12">
                <Row>
                  <Col sm="12" md="9">
                    <div className="d-flex align-items-center">
                      <img className="avatar mr-3" src={this.props.auth.photoUrl} alt={this.props.auth.name} />
                      <p className="text-success mr-3">Hallo <strong>({this.props.auth.name})</strong></p>
                      <p className="text-success font-weight-bold mr-3">{this.props.auth.email}</p>
                      <Link to="/wishlist"><p className="text-info">(Your Wishlist Page)</p></Link>
                    </div>
                  </Col>
                  <Col sm="12" md="3">
                    <Link to="/cartdetails">
                      <p className="float-right">
                        <MdAddShoppingCart size={25} color="black" />
                        <Badge color="success">{this.props.cart.length}</Badge>
                      </p>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col md="12">
                <InputGroup size="lg" className="mt-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Search your Phone!</InputGroupText>
                  </InputGroupAddon>
                  <Input value={this.state.text} onChange={this.onChangeSearchedText} />
                </InputGroup>
              </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
    filterPhonesAfterName(text) {
        dispatch(filterPhonesAfterName(text))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(InputGroups);