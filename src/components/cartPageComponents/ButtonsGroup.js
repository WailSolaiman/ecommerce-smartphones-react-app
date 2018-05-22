import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button } from 'reactstrap';
import { MdChevronLeft, MdAccountBalance } from 'react-icons/lib/md';

const ButtonsGroup = (props) => {
  return (
    <Col md="12">
      <div className="d-flex">
        <Link to="/phones">
          <Button 
            className="continueShopping d-flex align-items-center justify-content-center mr-3" 
            color="info">
            <MdChevronLeft size={25} color="white" className="mr-3"/>
            <p className="mb-0">SHOPPING</p>
          </Button>
        </Link>
        {
          props.totalItems > 0? (
            <Button className="placeOrder d-flex align-items-center justify-content-center" color="success">
              <MdAccountBalance size={25} color="white" className="mr-3"/>
              <p className="mb-0">PLACE ORDER</p>
            </Button>
          ) : (<p></p>)
        }
      </div>
    </Col>
  );
}

export default ButtonsGroup;