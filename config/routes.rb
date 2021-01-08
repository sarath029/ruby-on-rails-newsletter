Rails.application.routes.draw do
  get 'user/index'
  root 'pages#index'
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  namespace :api do
    namespace :v1 do
      resources :users
      resources :topics, param: :permalink
      resources :comments
    end
  end
  
  resources :users
  

  get '*path', to: 'pages#index', via: :all
end
