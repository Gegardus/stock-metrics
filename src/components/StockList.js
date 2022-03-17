 import React, { useState } from 'react';
import Search from './Search';
import '../styles/stocklist.css';


const StockList = () => { 
  const [value, setValue] = useState('');
  const handleSearch = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <section className="stocks">
        <Search handleSearch={handleSearch} data={value} />
        <div className="stock-list">    
        </div>
      </section>
    </>
  );
};

export default StockList;
