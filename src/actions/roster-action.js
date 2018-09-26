//action creators
import superagent from 'superagent';

export const FETCH_ALL='FETCH_ALL';

let API_URL = 'data/roster.json';

// let API_URL = 'http://api.commando.ccs.net/api/v1/roster';

// let apiURL = 'http://api.commando.ccs.net/api/v1/roster';

export const fetchAll = (roster) => ({
  type: FETCH_ALL,
  payload: roster,
});



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
