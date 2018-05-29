import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
      <div className="box-layout__box">
          <h1 className="box-layout__title">Smartphones React/Redux App</h1>
          <p>E-Commerce Smartphones App DEMO</p>
          <button className="button" onClick={startLogin}>Login with Google</button>
          <p className="lead mt-5 mb-0">Wail Solaiman &copy; 2018</p>
        </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
