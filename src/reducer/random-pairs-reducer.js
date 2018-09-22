import {RANDOM_PAIRS} from '../actions/random-pairs-action.js';

let initialState = {results:[]};

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    case RANDOM_PAIRS: return {...state, ...payload};
    default: return state;
  }

};