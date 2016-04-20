
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { page } from '../actions/page-actions';
import { setAuth } from '../actions/auth-actions';

class Start extends React.Component {

  loginCallback(auth) {
    console.log(auth);
    this.props.dispatch(setAuth(auth))
    this.props.dispatch(page('sex'))
  }

  render() {
    if (this.props.page !== 'start') {
      return null;
    }
    let dispatch = this.props.dispatch;

    return (

      <div>
        <section className="layout-content">
          <img src="src/images/landing_logo.png" />
          <h1 className="ui-heading">
            Workout With Bernie
          </h1>
        </section>
        <section className="layout-content">
          <p>Are you ready to get sweaty!?</p>
        </section>
        <button onClick={(e) => dispatch(page('sex'))}>SKIP!</button>
        <FacebookLogin
          appId="1684830645100688"
          autoLoad={true}
          className="ui-button"
          callback={(r) => this.loginCallback(r)} />
      </div>

    );
  }
}

export default connect(s => s)(Start);

