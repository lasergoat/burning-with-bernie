
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
    let time = this.props.time
    console.log(this.props)
    let dispatch = this.props.dispatch
    let level = this.props.options.level

    dispatch(incrementTime(time))

console.log('' + level + time);
    switch('' + level + time) {
      case 'easy':

        break;
      case 2:

        break;
      case 3:

        break;

    }
    if (time === 60) {

    }
  }

  render() {
    if (this.props.page !== 'workout') {
      return null;
    }

    this.startTimer()

    return (

      <div>
        <div className="ui-timer">
          {this.props.time}
        </div>

        <PushUps />
        <Plank />
      </div>

    );
  }
}

export default connect(s => s)(Workout);

