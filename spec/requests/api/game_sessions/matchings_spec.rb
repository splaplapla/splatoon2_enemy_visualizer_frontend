require "rails_helper"

describe '/api/game_sessions/matchings' do
  let(:game_session) { GameSession.create! }
  subject { post api_game_session_matchings_path(game_session) }

  describe 'POST /' do
    it do
      subject
      expect(response).to be_ok
    end

    it do
      expect { subject }.to change { Matching.count }.by(1)
    end
  end
end
