//action creators
import superagent from 'superagent';
// import cookies from 'react-cookies';


export const SIGNIN = 'SIGNIN';

// let API_URL = 'http://api.commando.ccs.net';

let API_URL = 'http://localhost:3000';

export const signin = () => ({
  type: SIGNIN,
  payload: {login: true},
});


// Thunk action returns a function that dispatches an action.
export const signinThunk = (user) => {
  return dispatch => {
    superagent
      .get(`${API_URL}`)
      // .auth(user.username, user.password)
      .then(response => {
        console.log('kdjfls', response)
        // cookies.save('userToken', response.text);
        // dispatch(signin());
      });
  };
};
