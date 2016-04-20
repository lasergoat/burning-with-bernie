
import React from 'react';
import { connect } from 'react-redux';
import PushUps from './workouts/pushups-component';
import Plank from './workouts/plank-component';
import Crunches from './workouts/crunches-component';
import Squats from './workouts/squats-component';
import {incrementTime} from '../actions/timer-actions';
import { actions } from 'react-redux-form';
import { page } from '../actions/page-actions';

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

  finish() {
    let dispatch = this.props.dispatch;

    dispatch(actions.change('workout', 'plank'))
    this.stopTimer()
    dispatch(page('finish'))

  }

  loop() {
    let time = this.props.time
    let dispatch = this.props.dispatch
    let level = this.props.options.level

    dispatch(incrementTime(time))

    switch(level + '-' + time) {
      case '1-10':
        dispatch(actions.change('workout', 'crunches'))
        break;
      case '1-20':
        dispatch(actions.change('workout', 'squats'))
        break;
      case '1-30':
        dispatch(actions.change('workout', 'pushups'))
        break;
      case '1-40':
        this.finish()
        break;

      case '2-10':
        dispatch(actions.change('workout', 'crunches'))
        break;
      case '2-20':
        dispatch(actions.change('workout', 'squats'))
        break;
      case '2-30':
        dispatch(actions.change('workout', 'pushups'))
        break;
      case '2-40':
        this.finish()
        break;

      case '3-10':
        dispatch(actions.change('workout', 'crunches'))
        break;
      case '3-20':
        dispatch(actions.change('workout', 'squats'))
        break;
      case '3-30':
        dispatch(actions.change('workout', 'pushups'))
        break;
      case '3-40':
        this.finish()
        break;
    }
  }

  render() {
    if (this.props.page !== 'workout') {
      return null;
    }

    this.startTimer()

    return (

      <div className="ui-workout">

        <h2>BERNIE UP</h2>
        
        <img className="ui-time" src="src/images/workout_progress.png" />
        
        <div className="ui-timer">
          {this.props.time}
        </div>

        <Crunches />
        <Squats />
        <PushUps />
        <Plank />

        <button onClick={(e) => this.finish()}>Skip to finish</button>
      </div>

    );
  }
}

export default connect(s => s)(Workout);

