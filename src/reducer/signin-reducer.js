import {SIGNIN} from '../actions/signin-action.js';

let initialState = {login: false};

export default (state = initialState, action) => {

  let {type, payload} = action;
  // let type = action.type;
  // let payload = action.payload;

  switch(type) {
    case SIGNIN: return {...state, ...payload};
    default: return state;
  }
  
};
