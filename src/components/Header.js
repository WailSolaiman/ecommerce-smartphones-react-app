import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Container, Row, Col } from 'reactstrap';

export const Header = ({ startLogout }) => (
  <Container fluid className="bg-dark">
    <Container>
      <Row>
        <Col md="12">
          <div className="w-100 d-flex justify-content-between align-items-center my-3">
            <Link className="" to="/phones">
              <h1 className="text-white mb-0">Smartphones Webshop</h1>
            </Link>
            <button className="button button--link" onClick={startLogout}>Logout</button>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
