
import React from 'react';
import { connect } from 'react-redux';

class Finish extends React.Component {

  render() {
    if (this.props.page !== 'finish') {
      return null;
    }

    return (

      <div>
        <h2>CONGRATULATIONS YOU'RE A CANDIDATE!</h2>
        
        <section className="finished-logos">
          <img src="src/images/finished_badge_complete.png" />
        
          <a href="https://twitter.com/home?status=I%20Berned%20892%20calories%20for%20Bernie!">
            <img src="src/images/tweet.png" />
          </a>
        </section>
      </div>

    );
  }
}

export default connect(s => s)(Finish);

