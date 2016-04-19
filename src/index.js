import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import './styles/main.scss';

import store from './store';

import Start from './components/start';
import Sex from './components/sex';
import Weight from './components/weight';
import Level from './components/level';
import Workout from './components/workout';
import Finish from './components/finish';

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
          <Workout />
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
