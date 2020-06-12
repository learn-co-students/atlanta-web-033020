class Api::V1::BooksController < ApplicationController

  before_action :authenticate, only: [:create]
  before_action :find_book, only: [:show,:update,:destroy]

  def index
    @books = Book.all
    @serialized_books = @books.as_json(
      only: [:id, :title, :img],
      include: [ user: { only: [:username] } ]
    )
    render :json => @serialized_books, :status => :ok
  end

  def create

    @book = Book.new(book_params)
    @book.user_id = current_user.id

    @book.save
    if @book.persisted?
      render :json => @book.as_json(
        only: [:id, :title, :img],
        include: [ user: { only: [:username] } ]
      ), :status => :ok
    else
      render :json => { "msg" => "Book Creation Failed.." }, :status => :bad_request
    end
  end

  def show
    render :json => @book, include: :user, :status => :ok
  end

  def update
  end

  def destroy
    @book.destroy
    if @book.persisted?
      render :json => { "msg" => "book is harder than we thought. destruction failed!"}, :status => :bad_request
    else
      render :json => { "msg" => "book was destroyed!"}, :status => :ok
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :img)
  end

  def find_book
    @book = Book.find_by(id: params[:id])
  end

end
