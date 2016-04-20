
import React from 'react';
import { connect } from 'react-redux';

class Plank extends React.Component {

  render() {
    if (this.props.workout !== 'plank') {
      return null;
    }

    return (

      <div>
        Plank
      </div>

    );
  }
}

export default connect(s => s)(Plank);

