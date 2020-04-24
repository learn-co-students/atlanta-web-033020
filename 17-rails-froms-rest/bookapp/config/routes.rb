Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/books', to: 'books#index'
  # post '/books', to: 'books#create'
  # delete '/books/:id', to: 'books#destroy'
  # patch '/books/:id', to: 'books#update'
  resources :books

end
