
import React from 'react';
import { connect } from 'react-redux';

class Squats extends React.Component {

  render() {
    if (this.props.workout !== 'squats') {
      return null;
    }

    return (

      <div class="ui-workout ui-squats">
        <h3>Squats!</h3>
        <img className="ui-workout-squat" src="src/images/workout_activity_squat.png" />
      </div>

    );
  }
}

export default connect(s => s)(Squats);
