class BooksController < ApplicationController

  configure do
    set :views, 'app/views/books'
  end


  # TODO: RESTful routes for books
  # GET, POST, PATCH, DELETE => CRUD

  # index => List of all instances for one resource
  # GET '/books'
  get '/books' do
    @books = Book.all
    erb :index
  end

  # new => Gets me a form to create new resource
  # GET '/books/new'
  get '/books/new' do
    @authors = Author.all
    erb :new
  end

  # show => Show an individual instance
  # GET '/books/title' or '/books/id'
  get "/books/:id" do
    @book = Book.find_by(id: params[:id])
    erb :show
  end

  # create => Handles form submission
  # POST '/books/create'
  post '/books' do

    @book = Book.create(params[:book])
    if @book.persisted?
      redirect "/books/#{@book.id}"
    else
      redirect "/books/new"
    end
  end

  # edit => Gets me an edit form
  # GET '/books/id/edit' or '/books/edit/1'
  get '/books/:id/edit' do
    @book = Book.find_by(id: params[:id])
    erb :edit
  end


  # update => Handles form submission
  # PATCH '/books/update'
  patch '/books/:id/update' do
    @book = Book.find_by(id: params[:id])
    @book.update(title: params[:title], desc: params[:desc], author_id: params[:author_id])
    redirect "/books/#{@book.id}"
  end

  # destroy => Deletes a resource
  # DELETE '/books/:id'
  delete "/books/:id/delete" do
    @book = Book.find_by(id: params[:id])
    @book.destroy
    redirect "/books"
  end
end
