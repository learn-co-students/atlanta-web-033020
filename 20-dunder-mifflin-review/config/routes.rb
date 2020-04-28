Rails.application.routes.draw do
  resources :dogs, only: [:index, :show]
  resources :employees, only: [:index, :show, :new, :create, :edit, :update]

  get '/', to: 'static#home', as: 'homepage'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
