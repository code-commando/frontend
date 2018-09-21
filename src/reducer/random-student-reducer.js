import {RANDOM_STUDENT} from '../actions/roster-action.js';


let initialState = {results:[]};

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    case RANDOM_STUDENT: return {...state, ...payload};
    default: return state;
  }

};