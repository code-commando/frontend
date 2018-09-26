//action creators
import superagent from 'superagent';

export const RANDOM_PAIRS='RANDOM_PAIRS';


let apiURL = 'http://localhost:3000/api/v1/roster';



export const randomPairs = (pairs) => ({
  type: RANDOM_PAIRS,
  payload: pairs,
});


// Thunk action returns a function that dispatches an action.


export const randomPairsThunk = () => {
  return dispatch => {
    superagent
      .get(`${apiURL}/pairs?classCode=401n5`)
      .then(pairs => {
        console.log('pairs', pairs);
        dispatch(randomPairs(pairs.body));
      });
  };
};


