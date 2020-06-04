import React from 'react'

const BookCard = (props) => {

  const { img, author, title, id } = props.book

  return (
    <div className='bookcard' data-id={id}>

      <img src={img} alt='' />

      <div className='booktitle'>
        Book: {title}
      </div>

      <div className='booktitle'>
        Author: {author}
      </div>

    </div>
  )
}

export default BookCard;
