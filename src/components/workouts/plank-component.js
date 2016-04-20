
import React from 'react';
import { connect } from 'react-redux';

class Plank extends React.Component {

  render() {
    if (this.props.workout !== 'plank') {
      return null;
    }

    return (

      <div class="ui-workout ui-planks">
        <h3>Planks</h3>
        <img className="ui-workout-plank" src="src/images/workout_activity_plank.png" />
      </div>

    );
  }
}

export default connect(s => s)(Plank);

