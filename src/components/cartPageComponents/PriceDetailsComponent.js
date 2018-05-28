import React from 'react';
import { Col } from 'reactstrap';
import { 
  calculatePriceWithAmount,
  calculateDiscountWithAmount
} from '../../selectors/phones';

const PriceDetailsComponent = (props) => {
  return (
    <Col sm="12" md={{size: 3, offset: 1}}>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">PRICE DETAILS</p>
      </div>
      <h3 className="text-success border-bottom mb-3 pb-5">({props.cartTotalItems}) Product(s)</h3>
      <div className="border-bottom mb-3">
        {
          props.cart && props.cart.map(product => (
            props.phones.map(phone => {
              if (phone.id === product.id) {
                return (
                  <div className="d-flex justify-content-between lead mb-3">
                    <p className="font-weight-bold">{phone.name}</p>
                    <p className="text-success lead">({product.quantity}x)</p>
                    <p>{phone.price * parseInt(product.quantity)}€</p>
                  </div>
                )
              }
            })
          ))
        }
        <div className="d-flex justify-content-between mb-3">
          <p className="font-weight-bold">Delivery Charges</p>
          <p className="text-success font-weight-bold">FREE</p>
        </div>
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between mb-3">
          <p className="font-weight-bold">Amount Payable</p>
          <p className="font-weight-bold">
            {calculatePriceWithAmount(props.cart, props.phones)}€
          </p>
        </div>
      </div>
      <div>
        <p className="text-success">Total Savings on this order(s)</p>
        <p className="text-success">
          <span className="font-weight-bold display-4">
            {calculateDiscountWithAmount(props.cart, props.phones)}€
          </span>
        </p>
      </div>
    </Col>
  );
};

export default PriceDetailsComponent;