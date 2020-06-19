import React from 'react';

import { connect } from 'react-redux';

const Sushi = (props) => {

  const { img_url, name, price, id } = props.sushi
  const eatSushi = props.eatSushi

  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => props.eat_sushi(props.sushi)}>
        {
          props.eaten.includes(id)
          ?
            null
          :
            <img src={img_url} width="100%" alt={''} />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    eat_sushi: (sushi) => dispatch({ type: 'EAT_SUSHI', sushi: sushi })
  }
}

export default connect(null,mapDispatchToProps)(Sushi)
