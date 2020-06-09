import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const BASE_URL = `http://localhost:3000/`
const STOCKS_URL = BASE_URL + 'stocks'

class MainContainer extends Component {
  constructor () {
    super ()

    this.state = {
      stocks: [],
      portfolio: [],
      filter: 'None',
      sort: 'None',
    }
  }

  componentDidMount () {
    fetch(STOCKS_URL)
    .then( res => res.json() )
    .then( stocks => {
      this.setState({ stocks: stocks })
    })
  }

  filterStocks =( )=> {
    let filteredStocks = [...this.state.stocks]
    let filter = this.state.filter
    if (filter !== 'None')
      filteredStocks = filteredStocks.filter( stock => stock.type === filter)
    
    return this.sortStocks(filteredStocks)
  }

  sortStocks =( stocks )=> {
    let sort = this.state.sort
    if (sort === 'Price')
      stocks.sort( (stock1, stock2) => stock1.price - stock2.price)
    else if (sort === 'Alphabetically')
      stocks.sort( (stock1, stock2) => stock1.name.localeCompare(stock2.name) )
    
    return stocks
  }

  addStockToPortfolio =( stock )=> {
    let portfolio = [...this.state.portfolio]
    if (!portfolio.includes(stock.id)) {
      portfolio.push(stock.id)
      this.setState({ portfolio: portfolio })
    }
  }

  removeStockFromPortfolio =( stock )=> {
    let portfolio = [...this.state.portfolio]
    if (portfolio.includes(stock.id)) {
      portfolio = portfolio.filter( id => id !== stock.id)
      this.setState({ portfolio: portfolio })
    }
  }

  changeSort =( value )=> this.setState({ sort: value }, ()=> console.log(this.state.sort))
  changeFilter =( value )=> this.setState({ filter: value}, ()=> console.log(this.state.filter))



  render() {
    return (
      <div>
        <SearchBar
          changeFilter = { this.changeFilter }
          changeSort = { this.changeSort }
          sort = { this.state.sort }
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks = { this.filterStocks() }
                addStockToPortfolio = { this.addStockToPortfolio }
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks = { this.state.stocks }
                portfolio = { this.state.portfolio }
                removeStockFromPortfolio = { this.removeStockFromPortfolio }
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
