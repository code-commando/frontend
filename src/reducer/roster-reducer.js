import {FETCH_ALL} from '../actions/roster-action.js';

let initialState = {};

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    case FETCH_ALL: return {...state, ...payload};
    default: return state;
  }

};