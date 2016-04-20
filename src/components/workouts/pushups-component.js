
import React from 'react';
import { connect } from 'react-redux';

class PushUps extends React.Component {

  render() {
    if (this.props.workout !== 'pushups') {
      return null;
    }

    return (

      <div>
        PushUps
      </div>

    );
  }
}

export default connect(s => s)(PushUps);

