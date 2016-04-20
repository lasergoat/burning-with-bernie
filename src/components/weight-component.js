
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
        <img src="src/images/welcome_weight_range_logo.png" />
        <section>
          <p>What weight range do you fall under?</p>
          <img src="src/images/welcome_weight_light.png" 
            onClick={(e) => this.selectWeight(1)} />
          <img src="src/images/welcome_weight_medium.png"
            onClick={(e) => this.selectWeight(2)} />
          <img src="src/images/welcome_weight_heavy.png" 
            onClick={(e) => this.selectWeight(3)} />
        </section>

      </div>

    );
  }
}

export default connect(s => s)(Weight);

