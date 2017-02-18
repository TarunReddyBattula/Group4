Rails.application.routes.draw do
  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  get 'users/new'
  
  get 'videos/search'

  root :to => "videos#index"
  resources :videos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  get '/signup' => 'users#new'
  post '/users' => 'users#create'
 
end
