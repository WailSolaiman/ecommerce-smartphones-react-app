import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Badge, Table, Progress } from 'reactstrap';
import { MdGrade, MdInsertChart } from 'react-icons/lib/md';

const PhoneRatings = (props) => {
    return (
        <Col sm="12" md="7">
            <Row>
                <Col md="12"><h1 className="mb-5">Ratings and Reviews</h1></Col>
                <Col sm="12" md="3">
                    <Badge color="success" className="mb-3">
                        <h1 className="mb-0 display-1">4.2</h1>
                    </Badge>
                    <p className="mr-5 lead">{props.phone.ratings} Ratings & {props.phone.reviews} Reviews</p>
                </Col>
                <Col sm="12" md="9">
                    <Table size="sm" borderless>
                        <tbody>
                            <tr className="d-flex align-items-center justify-content-between">
                                <td className="rate d-flex align-items-center">5<MdGrade size={15} color="black"/></td>
                                <td className="chart"><Progress color="success" value={80}></Progress></td>
                                <td><p className="mb-0 float-right">1,05,697</p></td>
                            </tr>
                            <tr className="d-flex align-items-center justify-content-between">
                                <td className="rate d-flex align-items-center">4<MdGrade size={15} color="black"/></td>
                                <td className="chart"><Progress color="success" value={70}></Progress></td>
                                <td><p className="mb-0 float-right">41,697</p></td>
                            </tr>
                            <tr className="d-flex align-items-center justify-content-between">
                                <td className="rate d-flex align-items-center">3<MdGrade size={15} color="black"/></td>
                                <td className="chart"><Progress color="success" value={55}></Progress></td>
                                <td><p className="mb-0 float-right">32,256</p></td>
                            </tr>
                            <tr className="d-flex align-items-center justify-content-between">
                                <td className="rate d-flex align-items-center">2<MdGrade size={15} color="black"/></td>
                                <td className="chart"><Progress color="warning" value={30}></Progress></td>
                                <td><p className="mb-0 float-right">20,254</p></td>
                            </tr>
                            <tr className="d-flex align-items-center justify-content-between">
                                <td className="rate d-flex align-items-center">1<MdGrade size={15} color="black"/></td>
                                <td className="chart"><Progress color="danger" value={20}></Progress></td>
                                <td><p className="mb-0 float-right">4,230</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Button className="rateProduct d-flex align-items-center" color="secondary">
                        <MdInsertChart size={25} color="white" className="mr-3"/>
                        RATE THIS PRODUCT
                    </Button>
                </Col>
            </Row>
        </Col>
    );
}

const mapStateToProps = (state) => ({
    phone: state.phone
});

export default connect(mapStateToProps)(PhoneRatings);