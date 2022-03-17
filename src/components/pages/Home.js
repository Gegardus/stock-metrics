import React from 'react';
import '../../styles/home.css';
import Header from '../Header';
import Market from '../Market';
import StockList from '../StockList';

const Home = () => (
  <>
    <section className="homepage">
      <Header home />
      <Market />
      <StockList />
    </section>
    {' '}
  </>
);

export default Home;
