class Web::V1::MatchingsController < ApplicationController
  def show
    @matching = Matching.eager_load(:game_session).find_by(unique_key: params[:id])
    if @matching.nil?
      return redirect_to root_url
    end

    if @matching.game_session.latest_matching_id != @matching.id
      return redirect_to web_v1_matching_path(@matching.game_session.latest_matching)
    end
  end
end
