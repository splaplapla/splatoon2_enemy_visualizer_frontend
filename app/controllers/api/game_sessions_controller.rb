class Api::GameSessionsController < Api::BaseController
  def create
    game_session = GameSession.create!
    render json: { game_session_id: game_session.unique_key }
  end
end
