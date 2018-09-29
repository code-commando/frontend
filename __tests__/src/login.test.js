import React from 'react';
import loginReducer from '../../src/reducer/login.js';
import {login, LOGIN} from '../../src/actions/login-action.js';


describe('Login action', () => {

  it('should set loggedIn to true', () => {
    let signIn = login();

    expect(signIn.payload.loggedIn).toBe(true);
    expect(signIn.type).toBe(LOGIN);
  });
});

describe('Login reducer', () => {

  it('initial state should be false', () => {
    let action = login();
    let state = loginReducer({loggedIn: false}, action);

    expect(state.loggedIn).toBe(true);
  });


});