import { combineReducers } from 'redux';
import { cases, countries,daily } from './cases';

export const reducers = combineReducers({
  cases,
  countries,
  daily
});
