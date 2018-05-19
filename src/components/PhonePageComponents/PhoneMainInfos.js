import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Badge } from 'reactstrap';
import { MdGrade, MdLocalOffer } from 'react-icons/lib/md';

const PhoneMainInfos = (props) => {
    return (
        <Col sm="12" md="7">
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
            <Row>
                <Col md="2">
                    <p>Highlights</p>
                </Col>
                <Col md="10">
                    <ul>
                        <li><p className="mb-0"><span className="font-weight-bold">cpu:</span> {props.phone.cpu}</p></li>
                        <li><p className="mb-0"><span className="font-weight-bold">camera:</span> {props.phone.camera}</p></li>
                        <li><p className="mb-0"><span className="font-weight-bold">size:</span> {props.phone.size}</p></li>
                    </ul>
                </Col>
                <Col md="2">
                    <p>Colors</p>
                </Col>
                <Col md="10">
                    <ul className="d-flex list-unstyled">
                    {
                        props.phone.colors && props.phone.colors.map((item, index) => {
                            return <li key={index}><p className="mb-0 mr-3 font-weight-bold">{item.color}</p></li>
                        })
                    }
                    </ul>
                </Col>
                <Col md="2">
                    <p>Storage</p>
                </Col>
                <Col md="10">
                    <ul className="d-flex list-unstyled">
                        <li><p className="mb-0 mr-3 font-weight-bold">{props.phone.storage}</p></li>
                    </ul>
                </Col>
            </Row>
            <p className="mb-5 lead">{props.phone.description}</p>
        </Col>
    );
}

const mapStateToProps = (state) => ({
    phone: state.phone
});

export default connect(mapStateToProps)(PhoneMainInfos);