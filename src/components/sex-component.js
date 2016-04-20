
import React from 'react';
import { connect } from 'react-redux';
import { page } from '../actions/page-actions';
import { actions } from 'react-redux-form';

class Sex extends React.Component {

  selectSex(sex) {
    let dispatch = this.props.dispatch;
    dispatch(actions.change('options.sex', sex))
    dispatch(page('weight'))
  }

  render() {
    if (this.props.page !== 'sex') {
      return null;
    }

    let dispatch = this.props.dispatch;

    return (

      <div>
        <h2>Your Sex</h2>
        <button onClick={(e) => this.selectSex(1)} >MALE</button>
        <button onClick={(e) => this.selectSex(2)} >FEMALE</button>
      </div>

    );
  }
}

export default connect(s => s)(Sex);

