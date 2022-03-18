import * as actions from '../actions/stockActions';

const API_KEY = 'afef6a6f2147e0ad239656a41fcf384c';

export const fetchAllStocks = () => async (dispatch) => {
  const res = await fetch(`https://financialmodelingprep.com/api/v3/actives?limit=100&apikey=${API_KEY}`);
  const stocksData = await res.json();

  dispatch(actions.getAllStocks(stocksData));
};

export const fetchStockDetails = (payload) => async (dispatch) => {
  const res = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${payload}?limit=120&apikey=${API_KEY}`);
  const details = await res.json();
  dispatch(actions.getStockDetails(details));
};
