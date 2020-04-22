class AuthorsController < ApplicationController

  configure do
    set :views, 'app/views/authors'
  end

  get '/authors' do
    @authors = Author.all
    erb :index
  end

  get '/authors/:id' do
    @author = Author.find_by(id: params[:id])
    erb :show
  end

end
