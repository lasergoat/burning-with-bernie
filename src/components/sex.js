
import React from 'react';
import { connect } from 'react-redux';

class Sex extends React.Component {

  render() {
    if (this.props.options.page !== 'sex') {
      return null;
    }

    return (

      <div>
        Sex
      </div>

    );
  }
}

export default connect(s => s)(Sex);

