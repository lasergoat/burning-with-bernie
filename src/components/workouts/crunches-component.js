
import React from 'react';
import { connect } from 'react-redux';

class Crunches extends React.Component {

  render() {
    if (this.props.workout !== 'crunches') {
      return null;
    }

    return (

      <div class="ui-workout ui-crunches">
        Crunches
      </div>

    );
  }
}

export default connect(s => s)(Crunches);
