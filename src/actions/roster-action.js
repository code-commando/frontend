//action creators
import superagent from 'superagent';

export const FETCH_ALL='FETCH_ALL';
export const ADD = 'ADD';
export const DELETE = 'DELETE'
// export const RANDOM_STUDENT='RANDOM_STUDENT';
// export const RANDOM_PAIRS='RANDOM_PAIRS';

let API_URL = 'data/roster.json';

// let API_URL = 'http://api.commando.ccs.net/api/v1/roster';

// let apiURL = 'http://api.commando.ccs.net/api/v1/roster';

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
export const fetchAllRosterThunk = () => {
  return dispatch => {
    superagent
      .get(`${API_URL}`)
      .then(response => {
        console.log(response.body);
        dispatch(fetchAll(response.body));
      });
  };
};

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
