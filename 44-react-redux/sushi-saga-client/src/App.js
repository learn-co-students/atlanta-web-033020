import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

import { connect } from 'react-redux';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.props.get_sushis(sushis)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_sushis: (sushis) => dispatch({ type: 'GET_SUSHI', sushis: sushis })
  }
}

export default connect(null,mapDispatchToProps)(App);
