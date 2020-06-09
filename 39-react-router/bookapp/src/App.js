import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      this.setState({ books: books })
    })
  }

  handleBookSubmit = (newBook) => {
    this.setState({ books: [...this.state.books, newBook] })
  }

  handleDeleteBtnClick = (e,bookObj) => {
    // 1. Delete the book from the Db => fetch req
    fetch(`http://localhost:3000/books/${bookObj.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(deletedBookObj => {
      // 2. Get rid of the book from the DOM
      // - Delete the book from the state => books array
      const newBooksArray = [...this.state.books].filter((book) => book.id !== bookObj.id)
      // - cause a re-render
      this.setState({ ...this.state, books: newBooksArray })
    })
  }



  render(){
    return (
      <BrowserRouter>
        <Header />

        <Switch>

          <Route exact path='/'>
            <BookContainer books={this.state.books} handleDeleteBtnClick={this.handleDeleteBtnClick}/>
          </Route>

          <Route exact path='/newbook'>
            <BookForm handleBookSubmit={this.handleBookSubmit} />
          </Route>

          <Route exact path='/login'>
            <h1> Login Here </h1>
          </Route>

          <Route exact path='/signup'>
            <h1> Sign Up Here </h1>
          </Route>

          <Route>
            <Redirect to='/' />
          </Route>

        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
