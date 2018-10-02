import superagent from 'superagent';
import cookies from 'react-cookies';


export const FETCH_QUIZ = 'FETCH_QUIZ';

let QUIZ_API = 'http://api.commando.ccs.net/api/v1/quiz/2';

export const fetchQuiz = (quiz) => ({
  type: FETCH_QUIZ,
  payload: quiz,
});

export const fetchQuizData = () => {

  const token = cookies.load('token');
  return dispatch => {
    superagent
      .get(QUIZ_API)
      .auth(token, {type: 'bearer'})
      .then(response => {
        dispatch(fetchQuiz(response.body.results));
      });
  };
};

