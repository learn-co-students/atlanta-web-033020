import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import BookContainer from './Components/BookContainer'

class App extends Component {

  initialState = {
    books: []
  }

  state = initialState

  fetchBooks = () => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      this.setState({ books: books })
    })
  }

  clearBooks = () => {
    this.setState(this.initialState)
  }

  render(){
    return (
      <>
        <Header />

        <button onClick={this.fetchBooks}> Get Books </button>

        <BookContainer books={this.state.books} />
      </>
    )
  }
}

export default App;
