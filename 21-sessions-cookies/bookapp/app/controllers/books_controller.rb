class BooksController < ApplicationController

  before_action :find_book, only: [:show, :edit, :update, :destroy]

  def index
    # @books = Book.all
    if current_user
      @books = current_user.books.all
    else
      redirect_to login_path
    end
  end

  def show
  end

  def new
    @authors = Author.all
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    @book.author_id = current_user.id
    if @book.valid?
      @book.save
      flash[:success] = "Book was created!"
      redirect_to book_path(@book)
    else
      flash[:errors] = @book.errors.messages
      redirect_to new_book_path
    end
  end

  def edit
  end

  def update
    if @book.author.id == current_user.id
      @book.update(book_params)
      flash[:success] = "Book was updated!"
      redirect_to book_path(@book)
    else
       flash[:success] = "Book update failed!"
      redirect_to book_path(@book)
    end
  end

  def destroy
    if @book.destroy
      flash[:message] = "Book was deleted!"
      redirect_to books_path
    else
      flash[:message] = "Book deletion failed!"
      redirect_to books_path
    end
  end

  private
  def book_params
    params.require(:book).permit(:title,:desc,:author_id)
  end

  def find_book
    @book = Book.find_by(id: params[:id])
  end

end
