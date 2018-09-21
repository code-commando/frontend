//action creators
import superagent from 'superagent';

export const FETCH_ALL='FETCH_ALL';
export const RANDOM_STUDENT='RANDOM_STUDENT';

let API_URL = 'data/roster.json';

export const fetchAll = (roster) => ({
  type: FETCH_ALL,
  payload: roster,
});

export const randomStudent = (student) => ({
  type: RANDOM_STUDENT,
  payload: student,
});


// Thunk action returns a function that dispatches an action.
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

export const randomStudentThunk = () => {
  return dispatch => {
    superagent
      .get(`http://localhost:3000/api/v1/roster/random?classCode=401n5`)
      .then(student => {
        console.log('student', student);
      });
  };
};
