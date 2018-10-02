
import superagent from 'superagent';
import cookie from 'react-cookies';

export const RANDOM_STUDENT='RANDOM_STUDENT';

let apiURL = 'http://api.commando.ccs.net/api/v1/roster/random';


export const randomStudent = (student) => ({
  type: RANDOM_STUDENT,
  payload: student,
});



export const randomStudentThunk = (classCode) => {

  const token = cookie.load('token');

  return dispatch => {
    superagent
      .get(`${apiURL}?classCode=${classCode}`)
      .auth(token, {type : 'bearer'})
      .then(student => {
        dispatch(randomStudent(student.body));
      });
  };
};