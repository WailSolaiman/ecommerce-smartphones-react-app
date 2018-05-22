import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import CartItemsRenderer from './cartPageComponents/CartItemsRenderer';
import PriceDetailsComponent from './cartPageComponents/PriceDetailsComponent';
import ButtonsGroup from './cartPageComponents/ButtonsGroup';
import LoadingPage from './LoadingPage';

class CartPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        hasRendered: true
      }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.hasRendered) {
      setTimeout(() => {
        this.setState(() => ({ hasRendered: false }))
      }, 1500);
      return <LoadingPage />
    }
    return (
      <Container className="my-5">
        <Row>
          <CartItemsRenderer 
            cart={this.props.cart}
            phones={this.props.phones}
            totalItems={this.props.cartTotalItems}
          />
          <PriceDetailsComponent 
            cart={this.props.cart}
            phones={this.props.phones}
            totalItems={this.props.cartTotalItems}
          />
        </Row>
        <Row>  
          <ButtonsGroup totalItems={this.props.cartTotalItems} />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  phones: state.phones,
  cart: state.cart,
  cartTotalItems: state.cart.length
});

export default connect(mapStateToProps)(CartPage);