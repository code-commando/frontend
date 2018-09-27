//action creators
import superagent from 'superagent';
import cookie from 'react-cookies';

export const RANDOM_STUDENT='RANDOM_STUDENT';


// let apiURL = 'http://localhost:3000/api/v1/roster';
let apiURL = 'http://api.commando.ccs.net/api/v1/roster/random';


export const randomStudent = (student) => ({
  type: RANDOM_STUDENT,
  payload: student,
});


// Thunk action returns a function that dispatches an action.


export const randomStudentThunk = (classCode) => {

  const token = cookie.load('token');

  return dispatch => {
    superagent
      .get(`${apiURL}?classCode=${classCode}`)
      .auth(token, {type : 'bearer'})
      .then(student => {
        console.log('student', student);
        dispatch(randomStudent(student.body));
      });
  };
};