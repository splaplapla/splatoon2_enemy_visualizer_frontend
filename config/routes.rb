Rails.application.routes.draw do
  root to: "game_sessions#index"

  namespace :api, shallow: true do
    resources :game_sessions, only: [:create, :show] do
      scope module: :game_sessions, shallow: true do
        resources :matchings, only: [:create, :show]
      end
    end
  end

  namespace :web, shallow: true do
    namespace :v1 do
      resources :matchings, only: :show
    end
  end
end
