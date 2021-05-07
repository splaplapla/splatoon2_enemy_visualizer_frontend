require "rails_helper"

describe '/api/matchings' do
  describe 'POST /' do
    let(:game_session) { GameSession.create! }
    let(:matching) { game_session.create_matching! }
    subject { post api_game_sessions_path }

    it do
      subject
      expect(response).to be_ok
    end

    it do
      expect { subject }.to change { GameSession.count }.by(1)
    end
  end
end
