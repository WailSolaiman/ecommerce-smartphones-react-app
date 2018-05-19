import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Jumbotron } from 'reactstrap';

const PhoneSpecifications = (props) => {
    return (
        <Col sm="12" md="7">
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="mb-5">Specifications</h1>
                        <div>
                            <p className="font-weight-bold">General</p>
                            <ul className="list-unstyled">
                                <li>
                                    <div className="d-flex lead">
                                        <p className="font-weight-bold width-150 mb-0">CPU</p>
                                        <p className="mb-0">{props.phone.cpu}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex lead">
                                        <p className="font-weight-bold width-150 mb-0">Camera</p>
                                        <p className="mb-0">{props.phone.camera}</p>
                                    </div>
                                </li>
                                <li><p className="">Size: {props.phone.size}</p></li>
                                <li><p className="">Weight: {props.phone.weight}</p></li>
                                <li><p className="">Display: {props.phone.display}</p></li>
                                <li><p className="">Battery: {props.phone.battery}</p></li>
                                <li><p className="">Memory: {props.phone.memory}</p></li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-weight-bold">Display Features</p>
                            <ul className="list-unstyled">
                                <li><p className="">Display Size: {props.phone.display_size}</p></li>
                                <li><p className="">Resolution: {props.phone.resolution} Pixels</p></li>
                                <li><p className="">Resolution Type: {props.phone.resolution_type}</p></li>
                                <li><p className="">Display Colors: {props.phone.display_colors}</p></li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-weight-bold">Camera Features</p>
                            <ul className="list-unstyled">
                                <li><p className="">Primary Camera Available: {props.phone.primary_camera_available}</p></li>
                                <li><p className="">Primary Camera: {props.phone.primary_camera}</p></li>
                                <li>
                                    <p className="">Primary Camera Features: </p>
                                    <ul>
                                        {
                                            props.phone.primary_camera_features && props.phone.primary_camera_features.map((item, index) => {
                                                return <li><p key={index}>{item.feature}</p></li>
                                            })
                                        }
                                    </ul>
                                </li>
                                <li><p className="">Secondary Camera Available: {props.phone.secondary_camera_available}</p></li>
                                <li><p className="">Secondary Camera: {props.phone.secondary_camera}</p></li>
                                
                                <li>
                                    <p className="">Secondary Camera Features: </p>
                                    <ul>
                                        {
                                            props.phone.secondary_camera_features && props.phone.secondary_camera_features.map((item, index) => {
                                                return <li><p key={index}>{item.feature}</p></li>
                                            })
                                        }
                                    </ul>
                                </li>
                                <li><p className="">Flash: {props.phone.camera_flash}</p></li>
                                <li><p className="">HD Recording: {props.phone.hd_recording}</p></li>
                                <li><p className="">Full HD Recording: {props.phone.full_hd_recording}</p></li>
                                <li><p className="">Video Recording: {props.phone.video_recording}</p></li>
                            </ul>
                        </div>                                
                    </Container>
                </Jumbotron>
            </div>
        </Col>
    );
}

const mapStateToProps = (state) => ({
    phone: state.phone
});

export default connect(mapStateToProps)(PhoneSpecifications);