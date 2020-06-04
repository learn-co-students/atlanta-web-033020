import React from 'react';

class BookForm extends React.Component {

  initialState = {
    title: '',
    author: '',
    img: ''
  }

  state = this.initialState

  handleSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img
    }

    fetch('http://localhost:3000/books',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
    .then(res => res.json())
    .then(newlyCreatedBook => {
      this.props.handleBookCreate(newlyCreatedBook)
      this.setState({ title: '', author: '', img: '' })
    })
    .catch(error => alert(error))
  }

  handleUpdate = (e) => {
    if(e.target.name === 'title'){
      this.setState({ title: e.target.value })
    }else if (e.target.name === 'author') {
      this.setState({ author: e.target.value })
    }else if(e.target.name === 'img'){
      this.setState({ img: e.target.value })
    }
  }

  render(){
    return (
      <span className={'form-outer'}>
        <h2> Add a new book </h2>
        <form className={'add-book'} onSubmit={this.handleSubmit}>

          <input type="text" name='title' placeholder="title"
            value={this.state.title} onChange={this.handleUpdate} />

          <input type="text" name='img' placeholder="img"
            value={this.state.img} onChange={this.handleUpdate}  />

          <input type="text" name='author' placeholder="author"
            value={this.state.author} onChange={this.handleUpdate}  />

          <input id="submit" type="submit" value="Submit" />

        </form>
      </span>
    )
  }
}

export default BookForm
