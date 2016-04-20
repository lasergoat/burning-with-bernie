
import React from 'react';
import { connect } from 'react-redux';

class Squats extends React.Component {

  render() {
    if (this.props.workout !== 'squats') {
      return null;
    }

    return (

      <div class="ui-workout ui-squats">
        Squats
      </div>

    );
  }
}

export default connect(s => s)(Squats);
