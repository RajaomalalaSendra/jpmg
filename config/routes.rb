Rails.application.routes.draw do
  root to: 'home#index'
  get 'thesaurus', to: 'thesaurus#index'
  get 'menu', to: 'menu#index'
  get 'menu/thesaurus'
  get 'menu/proverbs'
  get 'menu/machinetranslation'
  get 'about', to: 'menu#about'
  get 'menu/thesaurus/japanese', to: 'thesaurus#japanese'
  get 'menu/thesaurus/french', to: 'thesaurus#french'
  get 'menu/thesaurus/german', to: 'thesaurus#german'
  # This is the routes for the japanese
  namespace :menu do
    namespace :thesaurus do
      namespace :api do 
        namespace :v001 do 
          resources :words, only: [:index, :create, :destroy, :update]
        end 
      end
    end  
  end
  # This is the routes for the french 
  namespace :menu do
    namespace :thesaurus do
      namespace :api do 
        namespace :v002 do 
          resources :sentences, only: [:index, :create, :destroy, :update]
        end 
      end 
    end
  end
end