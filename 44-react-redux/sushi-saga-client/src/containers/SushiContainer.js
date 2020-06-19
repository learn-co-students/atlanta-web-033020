import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

import { connect } from 'react-redux';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => (
            <Sushi
              key={sushi.id} eaten={props.eaten}
                sushi={sushi} eatSushi={props.eatSushi} />
          ))
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    sushis: state.sushiReducer.sushis.slice(state.sushiReducer.offset,state.sushiReducer.offset + 4),
    eaten: state.walletReducer.eaten,
    offset: state.sushiReducer.offset
  }
}

export default connect(mapStateToProps)(SushiContainer)
