//action creators
import superagent from 'superagent';
import cookie from 'react-cookies';

export const FETCH_ALL='FETCH_ALL';
export const ADD = 'ADD';
export const DELETE = 'DELETE'
// export const RANDOM_STUDENT='RANDOM_STUDENT';
// export const RANDOM_PAIRS='RANDOM_PAIRS';

let apiURL = 'http://api.commando.ccs.net/api/v1/roster';


export const fetchAll = (roster) => ({
  type: FETCH_ALL,
  payload: roster,
});

export const addStudent = (student) => ({
  type : ADD,
  payload: student,
})

export const deleteOneStudent = (student) => {
  return {
    type: DELETE,
    payload: student,
  }
}

// Thunk action returns a function that dispatches an action.
// API actions
export const fetchAllRosterThunk = (classCode) => {

  const token = cookie.load('token');

  return dispatch => {
    superagent
      .get(`${apiURL}?classCode=${classCode}`)
      .auth(token, {type : 'bearer'})
      .then(response => {
        console.log(response);
        dispatch(fetchAll(response.body));
      });
  };
};


/*
In the future, there should be full CRUD operations to add to, edit and delete students from the roster
*/

// export const postStudentThunk = () => {
//   const token = cookie.load('token');

//   return dispatch => {
//     superagent
//       .post(`${apiURL}`)
//       .auth(token, {type : 'bearer'})
//       .then(response => {
//         console.log(response)
//       })
//   }
// }
