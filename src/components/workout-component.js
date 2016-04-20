
import React from 'react';
import { connect } from 'react-redux';
import PushUps from './workouts/pushups-component';
import Plank from './workouts/plank-component';
import {incrementTime} from '../actions/timer-actions';

class Workout extends React.Component {

  stopTimer() {
    clearInterval(this.timer)
  }

  startTimer() {
    if (this.timer) {
      return;
    }

    this.timer = setInterval(this.loop.bind(this), 1000);
  }

  loop() {
    this.props.dispatch(incrementTime(this.props.time))
  }

  render() {
    if (this.props.page !== 'workout') {
      return null;
    }

    this.startTimer()

    return (

      <div>
        {this.props.time}
        <PushUps />
        <Plank />
      </div>

    );
  }
}

export default connect(s => s)(Workout);

