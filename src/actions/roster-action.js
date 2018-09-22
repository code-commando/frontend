//action creators
import superagent from 'superagent';

export const FETCH_ALL='FETCH_ALL';
// export const RANDOM_STUDENT='RANDOM_STUDENT';
// export const RANDOM_PAIRS='RANDOM_PAIRS';

let API_URL = 'data/roster.json';

// let apiURL = 'http://localhost:3000/api/v1/roster';

export const fetchAll = (roster) => ({
  type: FETCH_ALL,
  payload: roster,
});

// export const randomStudent = (student) => ({
//   type: RANDOM_STUDENT,
//   payload: student,
// });

// export const randomPairs = (pairs) => ({
//   type: RANDOM_PAIRS,
//   payload: pairs,
// });


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

// export const randomStudentThunk = () => {
//   return dispatch => {
//     superagent
//       .get(`${apiURL}/random?classCode=401n5`)
//       .then(student => {
//         console.log('student', student);
//         dispatch(randomStudent(student.body));
//       });
//   };
// };

// export const randomPairsThunk = () => {
//   return dispatch => {
//     superagent
//       .get(`${apiURL}/pairs?classCode=401n5`)
//       .then(pairs => {
//         console.log('pairs', pairs);
//         dispatch(randomPairs(pairs.body));
//       });
//   };
// };

