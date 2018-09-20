//action creators
import superagent from 'superagent';
import axios from 'axios';
export const FETCH_ALL = 'FETCH_ALL';

export function fetchAll() {
  const API_URL = 'data/roster.json';
  const request = axios.get(API_URL).then(res => res);

  console.log('response', axios.get(API_URL).then(res => res.results));
  console.log('Request', request);
  return {
    type: FETCH_ALL,
    payload: request,
  };
}
