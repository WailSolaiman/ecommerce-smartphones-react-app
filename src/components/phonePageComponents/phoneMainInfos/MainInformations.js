import React from 'react';
import { Badge } from 'reactstrap';
import { MdGrade, MdLocalOffer } from 'react-icons/lib/md';

const MainInformations = (props) => {
  return (
    <div>
      <div className="d-flex">
        <p className="mr-5 font-weight-bold">{props.phone.name}</p>
        <p className="mr-5">({props.phone.storage})</p>
        <p className="mr-5">({props.phone.ram} RAM)</p>
      </div>
      <div className="d-flex align-items-start">
        <Badge color="success" className="mr-3 d-flex align-items-center">
          4.2
          <MdGrade size={20} color="white"/>
        </Badge>
        <p className="mr-5 lead font-weight-bold">{props.phone.ratings} Ratings & {props.phone.reviews} Reviews</p>
      </div>
      <p className="text-success mb-0 font-weight-bold">Extra {props.phone.discount}€ Discount</p>
      <h1 className="font-weight-bold">{props.phone.price},- €</h1>
      <div className="d-flex align-items-start">
        <MdLocalOffer size={25} color="green" className="mr-3"/>
        <p className="lead font-weight-bold">Lorem ipsum dolor tolert dfrter.</p>
      </div>
      <div className="d-flex align-items-start">
        <MdLocalOffer size={25} color="green" className="mr-3"/>
        <p className="lead">Lorem ipsum dolor tolert dfrter. Toler Klornt dh kroler.</p>
      </div>
      <div className="d-flex align-items-start">
        <MdLocalOffer size={25} color="green" className="mr-3"/>
        <p className="lead">
          Lorem ipsum dolor tolert 
          <span className="text-success font-weight-bold"> {props.phone.discount},-€</span> dfrter.
        </p>
      </div>
    </div>
  );
}

export default MainInformations;