class GameSessionsController < ApplicationController
  def index
    @game_sessions = GameSession.order(id: :desc).limit(10)
  end
end
