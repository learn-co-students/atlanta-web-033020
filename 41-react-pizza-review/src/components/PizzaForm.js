import React, { Component } from "react"

class PizzaForm extends Component {

  state = {
    pizza: {},
  }

  // update state with the props when the edit button is pushed
  static getDerivedStateFromProps(props, state) {
    if (props.pizza.id !== state.pizza.id) {
      return {
        pizza: {...props.pizza},
      };
    }
  }

  changeTopping =( e )=> {
    // dynamically change the state using the input field's names in the form
    let name = e.target.name
    let value = e.target.value
    this.setState({
      // using the spread operator to change nested attributes
      pizza: {...this.state.pizza, [name]: value }
    })
  }

  // use a seperate function to change the boolean
  changeVegetarian =( )=> this.setState({ pizza: {...this.state.pizza, vegetarian: !this.state.pizza.vegetarian } })

  render =()=> {
    let pizza = this.state.pizza
    return (
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name='topping' placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                pizza.topping
              } onChange={ (e)=> this.changeTopping(e)}/>
        </div>
        <div className="col">
          <select value={pizza.size} onChange={ (e)=> this.changeTopping(e) } name='size' className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={ ()=> this.changeVegetarian()} name='vegetarian' type="radio" value={true} checked={pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={ ()=> this.changeVegetarian()} name='vegetarian' type="radio" value={false} checked={!pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={ ()=> this.props.savePizzaChanges(pizza)}>Submit</button>
        </div>
      </div>
    )
  }
}

export default PizzaForm
