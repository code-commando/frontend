import {FETCH_COURSE, POST_COURSE} from '../actions/course-action.js';

let initialState = {
  dayNumber: 0,
};

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    case FETCH_COURSE: return Object.assign({}, state, payload);
    case POST_COURSE: return {...state, payload};
    default: return state;
  }
};
