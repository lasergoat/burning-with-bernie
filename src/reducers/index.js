
import { modelReducer, formReducer } from 'react-redux-form';

const testAuth = {
  name: "Daniel Walker", 
  id: "10105075530997042", 
  accessToken: "CAAX8WDQboJABACVNnBxj825iYgZB6ZB7MCUQpaY1BLtnrZCnK1KoK8k0MZBu5zZCTYWx1piFpZCZBa7iSAx4PJX7963uVvTxdO2vJMRmjnlPrOZCTGZBQRmJhUtrCiu1ZAm432bg1D3CLmtdactRmnS9P4ZCPivNfZB0LekUaZBW9287SBZCnYyKh9ZC9vCkQZBtP7HCigZAtGwG0a8XZBHmuxjNlZAUsfYjbOiANDA5wQZD"
}

const defaultOptions = {
  level: 1, 
  weight: 1, 
  sex:1,
};

export default {
  auth: modelReducer('auth', {}),
  options: modelReducer('options', defaultOptions),
  page: modelReducer('page', 'start'),
  time: modelReducer('time', 0),
  workout: modelReducer('workout', 'plank'),
}
