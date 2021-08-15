import { getData } from './api';
import { GET_INDONESIA, SET_LOADING, GET_GLOBALS, GET_DAILY,GET_COUNTRY,GET_CASES_COUNTRY} from '../constant';

const url = 'https://covid19.mathdro.id/api/';

export const indonesia = () => async (dispatch) => {
  dispatch(setLoadingIndonesia());
  const data = await getData(url + 'countries/indonesia');

  dispatch({
    type: GET_INDONESIA,
    data: data.data,
    error: data.error,
  });
};

export const getGLobal = () => async (dispatch) => {
  dispatch(setLoadingGlobal());
  const data = await getData(url);

  dispatch({
    type: GET_GLOBALS,
    data: data.data,
    error: data.error,
  });
}

export const getDailyAction = () => async (dispatch) => {
  dispatch(setLoadingDaily());
  const data = await getData(url + "daily");

  dispatch({
    type: GET_DAILY,
    data: data.data,
    error: data.error,
  });
}

export const getCountryAction = () => async (dispatch) => {
  dispatch(setLoadingCountry());
  const data = await getData(url + "countries");

  dispatch({
    type: GET_COUNTRY,
    data: data.data,
    error: data.error,
  });
}

export const getCasesCountries = (country) => async (dispatch) => {
  dispatch(setLoadingCasesCountry());
  const data = await getData(url + `countries/${country}`);

  dispatch({
    type: GET_CASES_COUNTRY,
    data: data.data,
    error: data.error,
  });
}



export const setLoadingIndonesia = () => {
  return {
    type: SET_LOADING + "_INDONESIA",
  };
};
export const setLoadingGlobal = () => {
  return {
    type: SET_LOADING + "_GLOBAL",
  };
};
export const setLoadingDaily = () => {
  return {
    type: SET_LOADING + "_DAILY",
  };
};
export const setLoadingCountry = () => {
  return {
    type: SET_LOADING + "_COUNTRY",
  };
};
export const setLoadingCasesCountry = () => {
  return {
    type: SET_LOADING+ "_CASES_COUNTRY",
  };
};
