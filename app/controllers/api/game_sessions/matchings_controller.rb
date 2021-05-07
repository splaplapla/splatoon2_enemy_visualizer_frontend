class Api::GameSessions::MatchingsController < Api::BaseController
  class Form
    attr_accessor :unique_key

    def initialize(params)
      @unique_key = params[:game_session_id]
    end
  end

  def create
    form = Form.new(params)
    game_session = GameSession.find_by!(unique_key: form.unique_key)
    matching = game_session.create_matching!
    render json: { matching_id: matching.unique_key }
  end
end

