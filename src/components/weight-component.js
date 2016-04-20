
import React from 'react';
import { connect } from 'react-redux';
import { page } from '../actions/page-actions';
import { actions } from 'react-redux-form';

class Weight extends React.Component {

  selectWeight(weight) {
    let dispatch = this.props.dispatch;
    dispatch(actions.change('options.weight', weight))
    dispatch(page('level'))
  }

  render() {
    if (this.props.page !== 'weight') {
      return null;
    }

    return (

      <div>
        <h2>Weight</h2>

        <button onClick={(e) => this.selectWeight(1)}>100</button>
        <button onClick={(e) => this.selectWeight(2)}>150</button>
        <button onClick={(e) => this.selectWeight(3)}>200</button>
      </div>

    );
  }
}

export default connect(s => s)(Weight);

