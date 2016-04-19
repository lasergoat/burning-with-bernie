
import { modelReducer, formReducer } from 'react-redux-form';

const initialAuth = {
}

export default {
  auth: modelReducer('auth'),
  page: modelReducer('page'),
  options: modelReducer('options'),
}
