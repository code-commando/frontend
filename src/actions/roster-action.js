
import superagent from 'superagent';
import cookie from 'react-cookies';

export const FETCH_ALL='FETCH_ALL';
export const ADD = 'ADD';
export const DELETE = 'DELETE';

let apiURL = 'http://api.commando.ccs.net/api/v1/roster';


export const fetchAll = (roster) => ({
  type: FETCH_ALL,
  payload: roster,
});

export const addStudent = (student) => ({
  type : ADD,
  payload: student,
});

export const deleteOneStudent = (student) => {
  return {
    type: DELETE,
    payload: student,
  };
};


export const fetchAllRosterThunk = (classCode) => {

  const token = cookie.load('token');

  return dispatch => {
    superagent
      .get(`${apiURL}?classCode=${classCode}`)
      .auth(token, {type : 'bearer'})
      .then(response => {
        dispatch(fetchAll(response.body));
      });
  };
};