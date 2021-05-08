class GameSessionsController < ApplicationController
  def index
    @game_sessions = GameSession.order(id: :desc).limit(10)
  end

  def create
    GameSession.create!.create_matching!
    redirect_to root_url
  end

  def destroy
    GameSession.find_by(unique_key: params[:id]).destroy!
    redirect_to root_url
  end
end
