//action creators
import superagent from 'superagent';

export const FETCH_ALL = 'FETCH_ALL';
export const ADD = 'ADD';
export const DELETE = 'DELETE';

let API_URL = 'data/roster.json';

export const fetchAll = (roster) => ({
  type: FETCH_ALL,
  payload: roster,
});

export const addStudent = (student) => ({
  type: ADD,
  payload: student,
})

export const deleteStudent = (id) => ({
  type: DELETE,
  payload: id,
})


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

export function postStudent(student){
  console.log(student);
  return dispatch => {
    superagent.post(API_URL)
      .send(student)
      .then(function(response){
        dispatch(addStudent(student));
        return response.body;
      });
  };
};

export function deleteOneStudent(id){
  return dispatch => {
    superagent.delete(//API route)
    ).then(function(response){
      dispatch(deleteOneStudent(id));
      fetch(API_URL)
        .then(function(response){
          return response.json();
        })
        .then(function(student) {
          dispatch(addStudent(student))
        });
    });
  };
}
