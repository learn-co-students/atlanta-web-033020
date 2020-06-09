import React from 'react';
import Stock from '../components/Stock'

const PortfolioContainer =( props )=> {

  let myStocks = props.stocks.filter( stock => props.portfolio.includes(stock.id) )

  function renderStocks () {
    return myStocks.map( stock =>
      <Stock
        key = {`P${stock.id}`}
        stock = { stock }
        moveStock = { props.removeStockFromPortfolio }
      />)
  }

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            renderStocks()
          }
      </div>
    );
}

export default PortfolioContainer;
