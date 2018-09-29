import React from 'react';
import pairsReducer from '../../src/reducer/random-pairs-reducer.js';
import {randomPairs, RANDOM_PAIRS} from '../../src/actions/random-pairs-action.js';


describe('Random Pairs actions', () => {

  it('should show random pairs', () => {
    let pairs = {results: [['student1, student2'], ['student5, student78']]};
    let newState = randomPairs(pairs);

    expect(newState.payload).toEqual(pairs);
    expect(newState.type).toBe(RANDOM_PAIRS);
  });
});

describe('Random Pairs reducer', () => {

  it('should update state', () => {
    let action = randomPairs({results: [['student1', 'student5']]});
    let state = pairsReducer({results: []}, action);

    expect(state.results.length).toBe(1);
  });
});
