import React from 'react';
import './App.css';

import data from './data';

import Header from './Components/Header';
import BookContainer from './Components/BookContainer';

const App = () => (
  <>
    <Header />
    <BookContainer books={data} />
  </>
)

export default App;
