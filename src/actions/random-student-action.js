//action creators
import superagent from 'superagent';

export const RANDOM_STUDENT='RANDOM_STUDENT';


let apiURL = 'http://localhost:3000/api/v1/roster';

export const randomStudent = (student) => ({
  type: RANDOM_STUDENT,
  payload: student,
});


// Thunk action returns a function that dispatches an action.

export const randomStudentThunk = () => {
  return dispatch => {
    superagent
      .get(`${apiURL}/random?classCode=401n5`)
      .then(student => {
        console.log('student', student);
        dispatch(randomStudent(student.body));
      });
  };
};
