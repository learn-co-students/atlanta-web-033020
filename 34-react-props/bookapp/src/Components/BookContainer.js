import React from 'react';
import Book from './Book';

const BookContainer = (props) => {
  return props.books.map(book => <Book book={book} key={book.title} />)
}

export default BookContainer;
