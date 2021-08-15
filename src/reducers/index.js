import { combineReducers } from "redux";
import {cases,globalCases,getDaily,getCountry,getCasesByCountries} from './cases'

export  const reducers  = combineReducers({
    cases,
    globalCases,
    daily : getDaily,
    country : getCountry,
    casesCountries : getCasesByCountries
}) 