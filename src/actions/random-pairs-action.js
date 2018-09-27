//action creators
import superagent from 'superagent';
import cookie from 'react-cookies';

export const RANDOM_PAIRS='RANDOM_PAIRS';


// let apiURL = 'http://localhost:3000/api/v1/roster';
let apiURL = 'http://api.commando.ccs.net/api/v1/roster/pairs';



export const randomPairs = (pairs) => ({
  type: RANDOM_PAIRS,
  payload: pairs,
});


export const randomPairsThunk = (classCode) => {

  const token = cookie.load('token');

  return dispatch => {
    superagent
      .get(`${apiURL}?classCode=${classCode}`)
      .auth(token, {type : 'bearer'})
      .then(pairs => {
        console.log('pairs', pairs);
        dispatch(randomPairs(pairs.body));
      });

  };
};

