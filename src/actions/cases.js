import { getData } from './api';
import { GET_COUNTRIES, SET_LOADING, GET_CONFIRMED_CASES } from '../constant';

const getCountries = () => async (dispatch) => {
  dispatch(loadingCountries());
  const res = await getData('https://covid19.mathdro.id/api/countries');
  const { data, error } = res;

  dispatch({
    type: GET_COUNTRIES,
    data,
    error,
  });
};
const getDataCases = (countries) => async (dispatch) => {
  dispatch(loadingCases());
  const res = await getData(`https://covid19.mathdro.id/api/countries/${countries}/confirmed`);
  const { data, error } = res;
  dispatch({
    type: GET_CONFIRMED_CASES,
    data,
    error,
  });
};

const loadingCountries = () => {
  return {
    type: 'LOADING_COUNTRIES',
  };
};

const loadingCases = () => {
  return {
    type: 'LOADING_CASES',
  };
};

export { getCountries, getDataCases };
