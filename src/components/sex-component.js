
import React from 'react';
import { connect } from 'react-redux';
import { page } from '../actions/page-actions';
import { actions } from 'react-redux-form';

class Sex extends React.Component {

  selectSex(sex) {
    let dispatch = this.props.dispatch;
    dispatch(actions.change('options.sex', sex))
    dispatch(page('weight'))
  }

  render() {
    if (this.props.page !== 'sex') {
      return null;
    }

    let dispatch = this.props.dispatch;

    return (

      <div className="ui-options">
        <section class="weight-get-started">
          <p className="ui-description">
            Let's get started.
          </p>
        </section>
        <section class="weight-male-female">
          <p>Are you male or female?</p>
          <img src="src/images/welcome_gender_male.png"  
            onClick={(e) => this.selectSex(1)} />
          <img src="src/images/welcome_gender_female.png" 
            onClick={(e) => this.selectSex(2)} />
        </section>
      </div>

    );
  }
}

export default connect(s => s)(Sex);

