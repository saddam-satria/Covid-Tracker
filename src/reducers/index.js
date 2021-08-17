import { combineReducers } from 'redux';
import { cases, getDaily, getCountry, getCasesByCountries } from './cases';

export const reducers = combineReducers({
  cases,
  daily: getDaily,
  country: getCountry,
  casesCountries: getCasesByCountries,
});
