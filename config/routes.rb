Rails.application.routes.draw do
  get 'user/index'
  root 'pages#index'

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
