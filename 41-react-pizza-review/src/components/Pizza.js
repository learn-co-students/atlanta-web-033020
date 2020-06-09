import React from "react"

const Pizza = ( props ) => {

  let pizza = props.pizza

  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Totally kosher!' : 'Lots of protein!'}</td>
      <td><button type="button" className="btn btn-primary" onClick={ ()=> props.editPizza(pizza) }>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
