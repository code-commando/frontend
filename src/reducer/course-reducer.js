import {FETCH_COURSE} from '../actions/course-action.js';

let initialState = {
  dayNumber: 0,
};

export default (state = initialState, action) => {

  console.log(action);
    let {type, payload} = action;

    switch(type) {
        case FETCH_COURSE: return Object.assign({}, state, payload);
        default: return state;
    }
}