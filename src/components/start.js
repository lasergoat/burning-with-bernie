
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';

class Start extends React.Component {

  loginCallback(auth) {
    console.log(auth);
    this.props.dispatch({type:'SET_AUTH', auth})
    this.props.dispatch({type:'PAGE', page: 'sex'})
  }

  render() {
    if (this.props.options.page !== 'start') {
      return null;
    }

    return (

      <div>
        <section className="layout-content">
          <img src="image/goat.png" alt="" width="200" height="200" />
          <h1 className="ui-heading">Workout With Bernie</h1>
        </section>
        <section className="layout-content">
          <p>Are you ready to get sweaty!?</p>
        </section>
        <FacebookLogin
          appId="1684830645100688"
          autoLoad={true}
          className="ui-button"
          callback={loginCallback.bind(this)} />
      </div>

    );
  }
}

export default connect(s => s)(Start);

