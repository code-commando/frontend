import superagent from 'superagent';
import cookies from 'react-cookies';


export const FETCH_QUIZ = 'FETCH_QUIZ';

// export const FETCH_QUIZ = 'FETCH_QUIZ';

// let QUIZ_API = 'data/quiz.json';

let QUIZ_API = 'http://api.commando.ccs.net/api/v1/quiz/2';

export const fetchQuiz = (quiz) => ({
  type: FETCH_QUIZ,
  payload: quiz,
});

//API actions
export const fetchQuizData = () => {

  console.log('!!!!!!');
  const token = cookies.load('token');
  return dispatch => {
    superagent
      .get(QUIZ_API)
      .auth(token, {type: 'bearer'})
      .then(response => {
        console.log(response.body);
        dispatch(fetchQuiz(response.body.results));
      });
  };
};

