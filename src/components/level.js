
import React from 'react';
import { connect } from 'react-redux';

class Level extends React.Component {

  render() {
    if (this.props.options.page !== 'level') {
      return null;
    }

    return (

      <div>
        Level
      </div>

    );
  }
}

export default connect(s => s)(Level);

