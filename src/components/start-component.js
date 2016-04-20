
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
          <img className="logo" src="src/images/landing_logo.png" />
        </section>
        <section className="layout-content">
          <form>
            <input type="text" name="username" value="Username"/>
            <p/>
            <input type="password" name="password" value="Password"/>
          </form>
          <div><a href="#forgot-password">Forgot Password?</a></div>
          <div>
            <a href="#"onClick={(e) => dispatch(page('sex'))}><img src="src/images/landing_sign_up.png"/></a>
            <a href="#" onClick={(e) => dispatch(page('sex'))}><img src="src/images/landing_login.png"/></a>
          </div>
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

