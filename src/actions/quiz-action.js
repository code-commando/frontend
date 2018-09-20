import express from 'express';
const router = express.Router();


export const FETCH_QUIZ = 'FETCH_QUIZ';

//let QUIZ_API = '';

export const fetchQuiz = (quiz) => ({
    type: FETCH_QUIZ,
    payload: quiz,
});

//API actions
export const fetchQuizData = () => {
    return dispatch => {
        router.get('/api/v1/quiz/:id', auth, (req, res, next) => {
            Quiz.findOne(req.params.id, req,cookies.jwt)
                .then( data => res.send(data))
                .catch(next);
        });
    }
}

export default router;
