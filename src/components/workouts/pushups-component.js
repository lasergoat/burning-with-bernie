
import React from 'react';
import { connect } from 'react-redux';

class PushUps extends React.Component {

  render() {
    if (this.props.workout !== 'pushups') {
      return null;
    }

    return (

      <div class="ui-workout ui-pushups">
        <h3>PushUps</h3>
        <img className="ui-workout-pushup" src="src/images/workout_activity_push_up.png" />
      </div>

    );
  }
}

export default connect(s => s)(PushUps);

