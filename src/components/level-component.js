
import React from 'react';
import { connect } from 'react-redux';
import { page } from '../actions/page-actions';
import { actions } from 'react-redux-form';

class Level extends React.Component {

  selectLevel(level) {
    let dispatch = this.props.dispatch;
    dispatch(actions.change('options.level', level))
    dispatch(page('workout'))
  }

  render() {
    if (this.props.page !== 'level') {
      return null;
    }

    return (

      <div>
        <h2>Level</h2>

        <button onClick={(e) => this.selectLevel(100)}>Easy</button>
        <button onClick={(e) => this.selectLevel(150)}>Moderate</button>
        <button onClick={(e) => this.selectLevel(200)}>Extreme</button>
      </div>

    );
  }
}

export default connect(s => s)(Level);

