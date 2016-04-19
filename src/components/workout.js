
import React from 'react';
import { connect } from 'react-redux';

class Workout extends React.Component {

  render() {
    if (this.props.page !== 'workout') {
      return null;
    }

    return (

      <div>
        Workout
      </div>

    );
  }
}

export default connect(s => s)(Workout);

