import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'

import staticBooks from './books'

class App extends Component {

  state = {
    books: [],
    addingBook: false
  }

  handleClick = (e) => {
    // 1. Fetch
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      console.log(books)
      // 2. Store those books && call setState with the books
      this.setState({ books: books })
    })
  }

  handleBookCreate = (newBook) => {
    this.setState({
      books: [...this.state.books, newBook],
      addingBook: false
    })
  }

  decideWhatToRender = () => {
    if(this.state.addingBook){
      return <BookForm handleBookCreate={this.handleBookCreate} />
    }else{
      return <BookContainer books={this.state.books} />
    }
  }

  render(){
    return (
      <div className="parent">

        <Header />

        <button onClick={this.handleClick}> Get Books </button>
        <button onClick={() => this.setState({ addingBook: !this.state.addingBook })}> Add a Book </button>

        { this.decideWhatToRender() }

      </div>
    );
  }
}

export default App;
