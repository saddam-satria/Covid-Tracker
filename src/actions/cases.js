import { getData } from './api';
import { GET_COUNTRIES, GET_DAILY, GET_CONFIRMED_CASES } from '../constant';

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

const getDataDaily = () => async (dispatch)=>{
  dispatch(loadingDaily())
  const res =  await getData('https://covid19.mathdro.id/api/daily')
  const{data,error} = res ;

  dispatch({
    type: GET_DAILY,
    data,
    error
  })
}

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

const loadingDaily = () => {
  return {
    type: 'LOADING_DAILY',
  };
};

export { getCountries, getDataCases,getDataDaily };
