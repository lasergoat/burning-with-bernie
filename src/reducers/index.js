
import { modelReducer, formReducer } from 'react-redux-form';

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
