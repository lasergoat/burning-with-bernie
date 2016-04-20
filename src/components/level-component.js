
import React from 'react';
import { connect } from 'react-redux';
import { page } from '../actions/page-actions';
import { actions } from 'react-redux-form';

class Level extends React.Component {

  selectLevel(level) {
    let dispatch = this.props.dispatch;
    dispatch(actions.change('options.level', level))
    dispatch(page('workout'))
  }

  render() {
    if (this.props.page !== 'level') {
      return null;
    }

    return (

      <div>
        <p>Please choose your workout level.</p>
        <img src="src/images/welcome_weight_range_logo.png" />
        <section>
          <p>What weight range do you fall under?</p>
          <img src="src/images/welcome_workout_easy.png" 
            onClick={(e) => this.selectLevel(1)} />
          <img src="src/images/welcome_workout_moderate.png"
            onClick={(e) => this.selectLevel(2)} />
          <img src="src/images/welcome_workout_extreme.png" 
            onClick={(e) => this.selectLevel(3)} />
        </section>
      </div>

    );
  }
}

export default connect(s => s)(Level);

