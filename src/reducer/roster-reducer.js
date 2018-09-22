import {FETCH_ALL, RANDOM_STUDENT} from '../actions/roster-action.js';


// let initialState = {};
let initialState = {results:[]};

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    case FETCH_ALL: return {...state, ...payload};
    case RANDOM_STUDENT: return {...state, ...payload};
    default: return state;
  }

};