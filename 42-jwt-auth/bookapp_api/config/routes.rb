Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do

      resources :users, except: [:create]
      resources :books

      post '/login', to: 'sessions#create'
      post '/signup', to: 'users#create'

    end
  end
end
