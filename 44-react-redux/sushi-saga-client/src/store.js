import { createStore } from 'redux';
import sushiReducer from './reducers/sushiReducer';
import walletReducer from './reducers/walletReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sushiReducer: sushiReducer,
  walletReducer: walletReducer
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
