//action creators
import superagent from 'superagent';
import cookie from 'react-cookies';
import { connect } from 'react-redux';

export const FETCH_ALL='FETCH_ALL';

// let apiURL = 'data/roster.json';

// let apiURL = 'http://localhost:3000/api/v1/roster';

let apiURL = 'http://api.commando.ccs.net/api/v1/roster';


export const fetchAll = (roster) => ({
  type: FETCH_ALL,
  payload: roster,
});



// Thunk action returns a function that dispatches an action.
// API actions
export const fetchAllRosterThunk = (classCode) => {

  const token = cookie.load('token');

  return dispatch => {
    superagent
      .get(`${apiURL}?classCode=${classCode}`)
      .auth(token, {type : 'bearer'})
      .then(response => {
        console.log(response.body);
        dispatch(fetchAll(response.body));
      });
  };
};

