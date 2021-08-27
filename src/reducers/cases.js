import { GET_COUNTRIES, GET_CONFIRMED_CASES } from '../constant';

const initializeState = {
  data: [],
  loading: false,
  error: false,
};

const cases = (state = initializeState, action) => {
  switch (action.type) {
    case GET_CONFIRMED_CASES:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: action.error,
      };
    case 'LOADING_CASES':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const countries = (state = initializeState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: action.error,
      };
    case 'LOADING_COUNTRIES':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export { cases, countries };
