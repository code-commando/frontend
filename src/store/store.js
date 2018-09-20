import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rosterReducer from '../reducer/roster-reducer.js';
import signinReducer from '../reducer/signin-reducer.js';

import logger from '../middleware/logger.js';

const appReducer = combineReducers({
  rosterReducer, signinReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(thunk, logger,)));

