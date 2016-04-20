
import React from 'react';
import { connect } from 'react-redux';
import PushUps from './workouts/pushups-component';
import Plank from './workouts/plank-component';

class Workout extends React.Component {

  componentDidMount() {
    console.log('asdfasdf');
  }

  render() {

    return (

      <div>
        <PushUps />
        <Plank />
      </div>

    );
  }
}

export default connect(s => s)(Workout);

