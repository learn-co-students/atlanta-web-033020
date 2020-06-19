import React, { Fragment } from 'react';

import { connect } from 'react-redux';

const Table = ({ eaten, wallet }) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ wallet } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    eaten: state.walletReducer.eaten,
    wallet: state.walletReducer.wallet
  }
}

export default connect(mapStateToProps)(Table)
