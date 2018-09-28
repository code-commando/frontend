// import express from 'express';
import superagent from 'superagent';


export const FETCH_QUIZ = 'FETCH_QUIZ';

let QUIZ_API = 'data/quiz.json';

export const fetchQuiz = (quiz) => ({
    type: FETCH_QUIZ,
    payload: quiz,
});

//API actions
export const fetchQuizData = () => {
    console.log('!!!!!!');
    return dispatch => {
        superagent
            .get(QUIZ_API)
            .then(response => {
                console.log(response.body)
                dispatch(fetchQuiz(response.body));
            });
    }
}

