
import { modeled, modelReducer, formReducer } from 'react-redux-form';

const initialAuth = {
  name: "Daniel Walker", 
  id: "10105075530997042", 
  accessToken: "CAAX8WDQboJABACVNnBxj825iYgZB6ZB7MCUQpaY1BLtnrZCnK1KoK8k0MZBu5zZCTYWx1piFpZCZBa7iSAx4PJX7963uVvTxdO2vJMRmjnlPrOZCTGZBQRmJhUtrCiu1ZAm432bg1D3CLmtdactRmnS9P4ZCPivNfZB0LekUaZBW9287SBZCnYyKh9ZC9vCkQZBtP7HCigZAtGwG0a8XZBHmuxjNlZAUsfYjbOiANDA5wQZD"
}

let initialOptionsState = {auth: null, page: 'start'};

function optionsReducer(state = initialOptionsState, action) {

  switch(action.type) {

    case 'PAGE':
      return {...state, page: action.page};

    case 'SET_AUTH':
      return {...state, auth: action.auth};

    default: 
      return state;
  }
}

export default {
  auth: modelReducer('auth'),
  options: modeled(optionsReducer, 'options'),
}
