import React from 'react';
import Stock from '../components/Stock'

const StockContainer =( props )=> {

  function renderStocks () {
    return props.stocks.map( stock =>
      <Stock
        key = {`S${stock.id}`}
        stock = { stock }
        moveStock = { props.addStockToPortfolio }
      />
    )
  }

  return (
    <div>
      <h2>Stocks</h2>
      {
        renderStocks()
      }
    </div>
  );
}

export default StockContainer;
