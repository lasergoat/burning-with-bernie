
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

// Import styles like this:
import './styles/main.scss';

const responseFacebook = (response) => {
  console.log(response);
}

class App extends React.Component {
  render() {
    return (

      <div className="layout-main">
        
        <header className="layout-header">
          
        </header>
        <section className="layout-content">
          <img src="image/goat.png" alt="" width="200" height="200" />
          <h1 className="ui-heading">Workout App</h1>
        </section>
        <footer className="layout-footer">
          <FacebookLogin
            appId="226441957366550"
            autoLoad={true}
            className="ui-button"
            callback={responseFacebook} />
        </footer>
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
