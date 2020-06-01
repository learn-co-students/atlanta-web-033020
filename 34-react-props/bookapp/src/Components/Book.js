import React from 'react'

const Book = (props) => {
  const { title, author, img } = props.book

  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>Book Name: {title} </h3>
      <h3>Author: {author} </h3>
    </div>
  )
}

export default Book;
