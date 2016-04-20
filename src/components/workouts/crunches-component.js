
import React from 'react';
import { connect } from 'react-redux';

class Crunches extends React.Component {

  render() {
    if (this.props.workout !== 'crunches') {
      return null;
    }

    return (

      <div class="ui-workout ui-crunches">
        <h3>Crunches</h3>
        <img className="ui-workout-crunch" src="src/images/workout_activity_crunch.png" />

      </div>

    );
  }
}

export default connect(s => s)(Crunches);
