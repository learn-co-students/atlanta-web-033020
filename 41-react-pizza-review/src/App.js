import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const BASE_URL = `http://localhost:3000/`
const PIZZA_URL = BASE_URL + 'pizzas/'


class App extends Component {

  state = {
    pizzas: [],
    pizzaToEdit: {},
  }

  componentDidMount () {
    fetch(PIZZA_URL)
    .then( res => res.json() )
    .then( pizzas => this.setState({ pizzas: pizzas }) )
  }

  editPizza =( pizza )=> this.setState({ pizzaToEdit: pizza })

  savePizzaChanges =( pizza )=> {
    fetch(PIZZA_URL + pizza.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
       })
    })
    .then( res => res.json() )
    .then( pizzaData => {
      if (!pizzaData.errors) {
        let pizzas = [...this.state.pizzas]
        pizzas = pizzas.map( pizza => pizza.id !== pizzaData.id ? pizza : pizzaData )
        this.setState({
          pizzas: pizzas
        })
      } else pizza.errors.forEach( error => console.log(error) )
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          pizza = { this.state.pizzaToEdit }
          savePizzaChanges = { this.savePizzaChanges }
        />
        <PizzaList
          pizzas = { this.state.pizzas }
          editPizza = { this.editPizza }
        />
      </Fragment>
    );
  }
}

export default App;
