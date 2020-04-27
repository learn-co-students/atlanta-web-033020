class BooksController < ApplicationController

  before_action :find_book, only: [:show, :edit, :update, :destroy]

  def index
    @books = Book.all
    render :index
  end

  def show
  end

  def new
    @authors = Author.all
    @book = Book.new
  end

  def create
    @book = Book.create(book_params)
    redirect_to book_path(@book)
  end

  def edit
  end

  def update
    @book.update(book_params)
    redirect_to book_path(@book)
  end

  def destroy
    @book.destroy
    redirect_to books_path
  end

  private
  def book_params
    params.require(:book).permit(:title,:desc,:author_id)
  end

  def find_book
    @book = Book.find_by(id: params[:id])
  end

end
