import React from 'react';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const AlertRenderer = (props) => {
  return (
    <div>
      {
        props.error && <Alert color="danger" className="mt-3">{props.error}</Alert>
      }
      {
        props.cart && props.cart.map(product => {
          if (product.id === props.phone.id) {
            return (
              <Alert key={product.id} color="success" className="mt-5">
                <h1 className="alert-heading">Well done!</h1>
                <p className="mb-0">
                  Product <span className="font-weight-bold">{props.phone.name}</span> was added successfully to your shopping cart.
                </p>
                {
                  props.cart && props.cart.map(item => {
                    if (item.id === props.phone.id) {
                      return (
                        <div className="success-alert mt-3" key={item.id}>
                          <h3 className="mb-0">Color: <span className="font-weight-bold">{item.color}</span></h3>
                          <h3 className="mb-0">Amount: <span className="font-weight-bold">{item.quantity}</span></h3>
                        </div>
                      )
                    }
                  })
                }
                <hr />
                <p className="mb-0">
                  Please click <Link to="/cartdetails" className="alert-link">here</Link> to go to your shopping cart
                </p>
              </Alert>
            );
          }
        })
      }
    </div>
  );
}

export default AlertRenderer;