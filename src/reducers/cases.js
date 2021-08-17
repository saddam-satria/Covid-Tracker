import { GET_INDONESIA, SET_LOADING, GET_DAILY, GET_COUNTRY, GET_CASES_COUNTRY } from '../constant';

const initalState = {
  data: [],
  loading: false,
  error: false,
};

export const cases = (state = initalState, action) => {
  switch (action.type) {
    case GET_INDONESIA:
      return { ...state, loading: false, error: action.error, data: action.data };

    case SET_LOADING + "_INDONESIA":
      return { ...state, loading: true };
    default:
      return state;
  }
};


export const getDaily = (state = initalState, action) => {
  switch (action.type) {
    case GET_DAILY:
      return { ...state, loading: false, data: action.data, error: action.error };

    case SET_LOADING + "_DAILY":
      return { ...state, loading: true };
    default:
      return state;
  }
};
export const getCountry = (state = initalState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return { ...state, loading: false, data: action.data, error: action.error };

    case SET_LOADING + "_COUNTRY":
      return { ...state, loading: true };
    default:
      return state;
  }
};
export const getCasesByCountries = (state = initalState, action) => {
  switch (action.type) {
    case GET_CASES_COUNTRY:
      return { ...state, loading: false, data: action.data, error: action.error };

    case SET_LOADING + "_CASES_COUNTRY":
      return { ...state, loading: true };
    default:
      return state;
  }
};
