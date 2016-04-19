import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [thunk];

const reducer = combineReducers(reducers);

const store = applyMiddleware(...middlewares)(createStore)(reducer);

export default store;
