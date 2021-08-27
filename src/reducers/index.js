import { combineReducers } from 'redux';
import { cases, countries } from './cases';

export const reducers = combineReducers({
  cases,
  countries,
});
