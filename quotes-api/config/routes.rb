Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :quotes, only: [:index]
    end
  end

  get 'api/v1/quotes/games', to: 'api/v1/quotes#games'
  get 'api/v1/quotes/movies', to: 'api/v1/quotes#movies'
  get 'api/v1/quotes/:id/search', to: 'api/v1/quotes#search'
end
