class BooksController < ApplicationController

  def index
    @books = Book.all
    render :index
  end

  def show
    @book = Book.find_by(id: params[:id])
  end

  def new
    @authors = Author.all
    @book = Book.new
  end

  def create
    @book = Book.create(book_params)
    redirect_to "/books/#{@book.id}"
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def book_params
    params.require(:book).permit(:title,:desc,:author_id)
  end

end
