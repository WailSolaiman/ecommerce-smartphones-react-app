import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { MdChevronLeft, MdAccountBalance } from 'react-icons/lib/md';
import { removePhoneFromCart } from '../actions/phones';

class CartPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          cart: this.props.cart
      }
  }

  removeFromCart = (id) => {
      this.props.removePhoneFromCart(id);
      this.setState(() => ({ cart: this.props.cart }));
  }

  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col md="8">
          <h1 className="mb-3">Products in your Cart: </h1>
          {
            this.state.cart && this.state.cart.map(id => (
              this.props.phones.map(phone => {
                if (phone.id === id) {
                  return (
                  <Row className="mb-5">
                    <Col md="12">
                      <Row className="border-bottom pb-5">
                        <Col md="3">
                          <img 
                            className="phones-images"
                            src={`./images/gallery/${phone.categoryId}/main.jpeg`}
                            alt={phone.name}
                          />
                        </Col>
                        <Col md="9">
                          <div>
                            <h2 className="mb-0">{phone.name} (Mocha Gold, 32 GB)</h2>
                            <small className="text-secondary">3 GB RAM</small>
                            <div className="d-flex align-items-center">
                              <p className="font-weight-bold mr-3 display-4">{phone.price}€</p>
                              <p className="text-success font-italic font-weight-bold">50,- € off</p>
                            </div>
                            <Button 
                              color="primary" 
                              size="lg" 
                              className="mr-3"
                              onClick={() => this.removeFromCart(phone.id)}>
                              REMOVE
                            </Button>
                            <Button color="info" size="lg">MOVE TO WISHLIST</Button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  )
                }
              })
            ))
          }
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
    phones: state.phones,
    cart: state.cart
});

const mapDispatchtoProps = dispatch => ({
    removePhoneFromCart(id) {
        dispatch(removePhoneFromCart(id))
    }
});

export default connect(mapStateToProps, mapDispatchtoProps)(CartPage);





// <Col sm="12" md={{size: 3, offset: 1}}>
//                     <p className="border-bottom pb-5 font-weight-bold">PRICE DETAILS</p>
//                     <div className="border-bottom mb-3">
//                         {
//                             cart.map(phoneId => (
//                                 phones.map(phone => {
//                                     if (phone.id === phoneId) {
//                                         return (
//                                             <div className="d-flex justify-content-between mb-3">
//                                                 <p className="font-weight-bold"><small>{phone.name}</small></p>
//                                                 <p>{phone.price}</p>
//                                             </div>
//                                         )
//                                     }
//                                 })
//                             ))
//                         }
//                         <div className="d-flex justify-content-between mb-3">
//                             <p className="font-weight-bold">Delivery Charges</p>
//                             <p className="text-success font-weight-bold">FREE</p>
//                         </div>
//                     </div>


//                     <div className="mb-3">
//                         <div className="d-flex justify-content-between mb-3">
//                             <p className="font-weight-bold">Amount Payable</p>
                            
//                         </div>
//                     </div>
//                     <p className="text-success font-weight-bold lead">Your Total Savings on this order ₹3,991</p>
//                 </Col>








// <Row>
//                 <Button 
//                     className="continueShopping d-flex align-items-center justify-content-center mr-3" 
//                     color="primary">
//                     <MdChevronLeft size={25} color="white" className="mr-3"/>
//                     <p className="mb-0">Continue shopping</p>
//                 </Button>
//                 <Button 
//                     className="placeOrder d-flex align-items-center justify-content-center" 
//                     color="success"
//                 >
//                     <MdAccountBalance size={25} color="white" className="mr-3"/>
//                     <p className="mb-0">Place Order</p>
//                 </Button>
//             </Row>