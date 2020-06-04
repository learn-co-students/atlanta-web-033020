import React from 'react';

class BookForm extends React.Component {

  initialState = {
    title: '',
    author: '',
    img: ''
  }

  state = this.initialState

  componentWillUnmount() {
    console.log(this.__proto__.constructor.name, "will unmount")
  }

  handleInputChange = (e) => {
    if(e.target.name === 'title'){
      this.setState({ title: e.target.value })
    }else if(e.target.name === 'img'){
      this.setState({ img: e.target.value })
    }else if(e.target.name === 'author'){
      this.setState({ author: e.target.value })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    const newBook = {
      title: this.state.title,
      img: this.state.img,
      author: this.state.author,
      read: false
    }

    fetch('http://localhost:3000/books',{
      method: 'POST',
      headers: {
        "Content-Type":'application/json'
      },
      body: JSON.stringify(newBook)
    }).then(res => res.json())
    .then(newBookObj => {
      // console.log(newBookObj)
      this.props.handleBookSubmit(newBookObj)
      this.setState(this.initialState)
    })
  }

  render(){
    return (
      <span className={'form-outer'}>
      <h2> Add a new book </h2>
      <form className={'add-book'} onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.handleInputChange} name='title' placeholder="title"  />
        <input type="text" value={this.state.img} onChange={this.handleInputChange} name='img' placeholder="img"  />
        <input type="text" value={this.state.author} onChange={this.handleInputChange} name='author' placeholder="author"  />
        <input id="submit" type="submit" value="Submit" />
      </form>
      </span>
    )
  }
}

export default BookForm;
