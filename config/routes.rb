Rails.application.routes.draw do
  resources :my_favorites
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:create, :index]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
end
