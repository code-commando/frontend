
import {LOGIN} from '../actions/login-action.js';

let initialState = {loggedIn: false};

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    case LOGIN: return {...state, ...payload};
    default: return state;
  }
};