import React from 'react';
import randomReducer from '../../src/reducer/random-student-reducer.js';
import {randomStudent, RANDOM_STUDENT} from '../../src/actions/random-student-action.js';

describe('Random Student actions', () => {
  
  it('should show a student', () => {
    let student = {results: ['student1']};
    let newState = randomStudent(student);

    expect(newState.payload).toEqual(student);
    expect(newState.type).toBe(RANDOM_STUDENT);
  });

});

describe('Random Student reducer', () => {

  it('should update state', () => {
    let action = randomStudent({results: ['student']});
    let state = randomReducer({results: []}, action);
    
    expect(state.results.length).toBe(1);
  });

});