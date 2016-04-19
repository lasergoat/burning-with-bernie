
import React from 'react';
import { connect } from 'react-redux';

class Weight extends React.Component {

  render() {
    if (this.props.options.page !== 'weight') {
      return null;
    }

    return (

      <div>
        Weight
      </div>

    );
  }
}

export default connect(s => s)(Weight);

