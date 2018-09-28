import React from 'react';
import rosterReducer from '../../src/reducer/roster-reducer.js';
import {fetchAll, FETCH_ALL} from '../../src/actions/roster-action.js';



describe('Roster actions', () => {

  it('fetchAll payload should be empty to start', () => {
    let roster = {results: []};
    const newState = fetchAll(roster);

    expect(newState.payload).toEqual(roster);
    expect(newState.type).toBe(FETCH_ALL);
  });

  it('fetchAll payload should show student roster and type should be FETCH_ALL', () => {
    let roster = {results: ['student1, student2']};
    const newState = fetchAll(roster);
    
    expect(newState.payload).toEqual(roster);
    expect(newState.type).toBe(FETCH_ALL);
  });

});


describe('Roster reducer', () => {

  it('should update state', () => {
    let action = fetchAll({results: ['student1']});
    let state = rosterReducer({results: []}, action);
    
    expect(state.results.length).toBe(1);
  });

});