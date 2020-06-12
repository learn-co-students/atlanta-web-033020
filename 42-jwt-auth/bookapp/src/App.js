import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {

  state = {
    books: [],
    isLoggedIn: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/books')
    .then(res => res.json())
    .then(books => {
      let token = localStorage.getItem('auth_token')
      let logged_in = token ? true : false

      this.setState({ books: books, isLoggedIn: logged_in })
    })
  }

  handleBookSubmit = (newBook) => {
    this.setState({ books: [...this.state.books, newBook] })
  }

  handleLogin = (token) => {
    localStorage.setItem('auth_token',token)
    this.setState({ ...this.state, isLoggedIn: true})
  }

  // handleDeleteBtnClick = (e,bookObj) => {
  //   // 1. Delete the book from the Db => fetch req
  //   fetch(`http://localhost:3000/books/${bookObj.id}`,{
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(deletedBookObj => {
  //     // 2. Get rid of the book from the DOM
  //     // - Delete the book from the state => books array
  //     const newBooksArray = [...this.state.books].filter((book) => book.id !== bookObj.id)
  //     // - cause a re-render
  //     this.setState({ ...this.state, books: newBooksArray })
  //   })
  // }



  render(){
    return (
      <BrowserRouter>
        <Header isLoggedIn={this.state.isLoggedIn} />

        <Switch>

          <Route exact path='/'>
            <BookContainer books={this.state.books} handleDeleteBtnClick={this.handleDeleteBtnClick}/>
          </Route>

          <Route exact path='/newbook' component={() => {
            if(this.state.isLoggedIn){
              return <BookForm handleBookSubmit={this.handleBookSubmit} />
            }else{
              return <Redirect to='/login' />
            }
          }} />

          <Route exact path='/login'>
            <Login handleLogin={this.handleLogin} />
          </Route>

          <Route exact path='/signup'>
            <SignUp handleLogin={this.handleLogin} />
          </Route>

          <Route exact path='/logout' component={() => {
            localStorage.clear()
            this.setState({ isLoggedIn: false })
            return <Redirect to='/login' />
          }} />

          <Route>
            <Redirect to='/' />
          </Route>

        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
