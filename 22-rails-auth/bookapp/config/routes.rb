Rails.application.routes.draw do
  resources :books
  resources :users

  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'

  get '/login', to: 'auth#login'
  post '/verify', to: 'auth#verify'
  get '/logout', to: 'auth#logout'
  
end
