//action creators
import superagent from 'superagent';
import cookie from 'react-cookies';

export const FETCH_ALL='FETCH_ALL';

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
