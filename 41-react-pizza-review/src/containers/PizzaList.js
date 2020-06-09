import React from 'react';
import Pizza from '../components/Pizza'

const PizzaList =( props )=> {

  function renderPizzas () {
    return props.pizzas.map( pizza =>
      <Pizza
        pizza = { pizza }
        editPizza = { props.editPizza }
      />
    )
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          renderPizzas()
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
