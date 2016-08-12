Rails.application.routes.draw do
  devise_for :users

  resources :museums
  resources :exhibits
  resources :users, only: [:show, :edit, :update]
  resources :tickets

  root to: "museums#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
