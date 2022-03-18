import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import StockCard from '../components/StockCard';
import store from '../redux/store';
import StockList from '../components/StockList';
import CardDetails from '../components/CardDetails';

test('testing if StockCard is rendered', () => {
  const stock = {
    ticker: 'AAPL',
    companyName: 'Apple Inc.',
    price: '160',
    changes: '0.23',
    changesPercentage: '0.003',
  };

  const history = createMemoryHistory();
  expect(
    render(
      <Router location={history.location} navigator={history}>
        <StockCard stock={stock} />
      </Router>,
    ),
  ).toMatchSnapshot();
});

test('if StockList renders correctly', () => {
  expect(
    render(
      <Provider store={store}>
        <StockList />
      </Provider>,
    ),
  ).toMatchSnapshot();
});

test('if CardDetails renders correctly', () => {
  expect(
    render(
      <Provider store={store}>
        <CardDetails />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
