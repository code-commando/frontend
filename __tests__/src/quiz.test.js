import React from 'react';
import quizReducer from '../../src/reducer/quiz-reducer.js';
import {fetchQuiz, FETCH_QUIZ} from '../../src/actions/quiz-action.js';


describe('Quiz generator actions', () => {

  it('should generate quiz', () => {
    let quiz = [
      {
        questions: 'NPM is a dependency manager',
        possibleAnswers: [
          'True, ',
          'False',
        ],
        correctAnswer: 'True',
      },
    ];
    let newState = fetchQuiz(quiz);
    
    expect(newState.payload).toEqual(quiz);
    expect(newState.type).toBe(FETCH_QUIZ);
  });
});

// describe('Quiz reducer', () => {

//   it('should update state', () => {
//     let action = fetchQuiz([
//       {
//         questions: 'NPM is a dependency manager',
//         possibleAnswers: [
//           'True, ',
//           'False',
//         ],
//         correctAnswer: 'True',
//       },
//     ]);
//     let state = quizReducer([], action);

//     expect(state.results).toBe(1);
//   });
// });

