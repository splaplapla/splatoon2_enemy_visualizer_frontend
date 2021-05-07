require "rails_helper"

describe '/api/game_sessions/matchings' do
  let(:game_session) { GameSession.create! }
  subject { post api_game_session_matchings_path(game_session) }

  describe 'GET /:id' do
    it do
      matching = game_session.create_matching!
      get api_matching_path(matching.unique_key)
      expect(JSON.parse(response.body)).to eq('matching_id' => matching.id)
    end
  end

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
