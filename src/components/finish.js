
import React from 'react';
import { connect } from 'react-redux';

class Finish extends React.Component {

  render() {
    if (this.props.options.page !== 'finish') {
      return null;
    }

    return (

      <div>
        Finish
      </div>

    );
  }
}

export default connect(s => s)(Finish);

