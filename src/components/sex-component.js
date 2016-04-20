
import React from 'react';
import { connect } from 'react-redux';
import { page } from '../actions/page-actions';

class Sex extends React.Component {

  render() {
    if (this.props.page !== 'sex') {
      return null;
    }

    let dispatch = this.props.dispatch;

    return (

      <div>
        <h2>Your Sex</h2>
        <button onClick={(e) => dispatch(page('weight'))}>MALE</button>
        <button onClick={(e) => dispatch(page('weight'))}>FEMALE</button>
      </div>

    );
  }
}

export default connect(s => s)(Sex);

