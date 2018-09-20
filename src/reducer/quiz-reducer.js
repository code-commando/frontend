import {FETCH_QUIZ} from '../actions/quiz-action.js';

let initialState = {};

export default (state = initialState, action) => {

    let {type, payload} = action;

    switch(type) {
        case FETCH_QUIZ: return{...state, ...payload};
        return state;
    }
}