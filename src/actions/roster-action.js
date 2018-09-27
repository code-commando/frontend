//action creators
import superagent from 'superagent';
import cookie from 'react-cookies';
import { connect } from 'react-redux';

export const FETCH_ALL='FETCH_ALL';
export const ADD = 'ADD';
export const DELETE = 'DELETE'
// export const RANDOM_STUDENT='RANDOM_STUDENT';
// export const RANDOM_PAIRS='RANDOM_PAIRS';

<<<<<<< HEAD
let API_URL = 'http://localhost:3000/api/v1/roster?classCode';
let QUIZ_API = '';
=======
// let apiURL = 'data/roster.json';
// let API_URL = 'http://localhost:3000/api/v1/roster?classCode';
>>>>>>> 9bf9bb4ec59a1577cae19fa5ca02f8e70a0546e5

// let apiURL = 'http://localhost:3000/api/v1/roster';

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
        console.log(response.body);
        dispatch(fetchAll(response.body));
      });
  };
};

<<<<<<< HEAD
// export const postStudent = (student) => {
//   return dispatch => {
//     superagent.post(`${API_URL}`).then(response => {
//       dispatch(addStudent(student));
//       console.log('!!!!!')
//       return response.body
//     });
//   };
// }

// export const deleteStudent = (student) => {
//   return dispatch => {
//       superagent.delete(`${API_URL}/${student}`)
//         .then(function(response){
//           dispatch(deleteOneStudent(student));
//         })
//   }
// }
=======
>>>>>>> 9bf9bb4ec59a1577cae19fa5ca02f8e70a0546e5
