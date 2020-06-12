import React from 'react';

import { withRouter } from "react-router";

class SignUp extends React.Component {

  initialState = {
    username: '',
    password: ''
  }

  state = this.initialState

  handleInputChange = (e) => {
    if(e.target.name === 'username'){
      this.setState({ username: e.target.value })
    }else if(e.target.name === 'password'){
      this.setState({ password: e.target.value })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const userObj = {
      username: this.state.username,
      password: this.state.password
    }

    fetch('http://localhost:3000/api/v1/signup',{
      method: 'POST',
      headers: {
        "Content-Type":'application/json'
      },
      body: JSON.stringify({ user: userObj })
    }).then(res => res.json())
    .then(token => {
      this.props.handleLogin(token.token)
      this.props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  render(){
    return (
      <span className={'form-outer'}>
        <h2> Sign Up </h2>
        <form className={'add-book'} onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleInputChange} name='username' placeholder="username"  />
          <input type="password" value={this.state.password} onChange={this.handleInputChange} name='password' placeholder="password"  />
          <input id="submit" type="submit" value="Submit" />
        </form>
      </span>
    )
  }
}

export default withRouter(SignUp);
