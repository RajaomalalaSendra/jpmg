Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api do 
    namespace :v001 do 
     resources :words, only: [:index, :create, :destroy, :update]
    end 
  end 
end
