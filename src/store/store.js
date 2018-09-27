import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rosterReducer from '../reducer/roster-reducer.js';
import randomStudentReducer from '../reducer/random-student-reducer.js';
import randomPairsReducer from '../reducer/random-pairs-reducer.js';
import quizReducer from '../reducer/quiz-reducer.js';
import courseReducer from '../reducer/course-reducer.js';
import loginReducer from '../reducer/login.js';

import logger from '../middleware/logger.js';

const appReducer = combineReducers({
  rosterReducer, randomStudentReducer, randomPairsReducer, quizReducer, courseReducer, loginReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(thunk, logger,)));

