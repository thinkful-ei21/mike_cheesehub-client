import { API_BASE_URL } from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';

const fetchCheesesRequest = () => {
  return {
    type: FETCH_CHEESES_REQUEST
  };
};

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCESS';

const fetchCheesesSuccess = (cheeses) => {
  return {
    type: FETCH_CHEESES_SUCCESS,
    cheeses
  };
};

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';

const fetchCheesesError = (err) => {
  return {
    type: FETCH_CHEESES_ERROR,
    error: err
  };
};

export const FETCH_CHEESES = 'FETCH_CHEESES';

export const fetchCheeses = () => {
  return dispatch => {
    dispatch(fetchCheesesRequest());
    fetch(`${API_BASE_URL}/api/cheeses`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
    .catch(err => dispatch(fetchCheesesError(err)))
  };
}; 

export default fetchCheeses;