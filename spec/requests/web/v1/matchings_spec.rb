require "rails_helper"

describe '/web/v1/matchings' do
  describe 'GET /:id' do
    let(:game_session) { GameSession.create! }
    let(:matching) { game_session.create_matching! }

    it do
      get web_v1_matching_path(matching)
      expect(response).to be_ok
    end

    context '新しいmatchingが作られたとき' do
      before do
        matching
      end

      it 'redirectすること' do
        next_matching = game_session.create_matching!
        get web_v1_matching_path(matching)
        expect(response).to redirect_to(web_v1_matching_path(next_matching))
      end
    end
  end
end
