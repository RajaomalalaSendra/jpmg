Rails.application.routes.draw do
  root to: 'home#index'
  get 'home/show'
  namespace :api do 
    namespace :v001 do 
     resources :words, only: [:index, :create, :destroy, :update]
    end 
  end 
  namespace :api do 
    namespace :v002 do 
     resources :sentences, only: [:index, :create, :destroy, :update]
    end 
  end 
end