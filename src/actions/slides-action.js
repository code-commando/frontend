
import superagent from 'superagent';
import cookie from 'react-cookies';

export const FETCH_README='FETCH_README';

let apiURL = 'http://api.commando.ccs.net/api/v1/readme';


export const fetchReadme = (readme) => ({
  type: FETCH_README,
  payload: readme,
});


export const fetchReadmeThunk = (classCode) => {

  const token = cookie.load('token');

  return dispatch => {
    superagent
      .get(`${apiURL}?classCode=${classCode}`)
      .auth(token, {type : 'bearer'})
      .then(response => {
        dispatch(fetchReadme(response.body));
      });
  };
};