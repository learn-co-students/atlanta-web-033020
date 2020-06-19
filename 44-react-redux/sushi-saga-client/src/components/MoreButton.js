import React from 'react';
import { connect } from 'react-redux';

const MoreButton = (props) => {
    return <button onClick={props.more_sushi}>
            More sushi!
          </button>
}

const mapDispatchToProps = (dispatch) => {
  return {
    more_sushi: () => dispatch({ type: 'GET_MORE_SUSHI' })
  }
}

export default connect(null,mapDispatchToProps)(MoreButton)
