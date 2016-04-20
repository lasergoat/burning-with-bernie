import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import './styles/main.scss';

import store from './store';

import Start from './components/start-component';
import Sex from './components/sex-component';
import Weight from './components/weight-component';
import Level from './components/level-component';
import Workout from './components/workout-component';
import Finish from './components/finish-component';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>

        <div className="layout-main">

          <header className="layout-header">
          </header>

          <Start />
          <Sex />
          <Weight />
          <Level />
          {this.props.page === 'workout' ? <Workout /> : null}
          <Finish />

          <footer className="layout-footer">
          </footer>
        </div>

      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
connect(s => s)(App);
