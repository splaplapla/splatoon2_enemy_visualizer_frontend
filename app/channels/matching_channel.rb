class MatchingChannel < ApplicationCable::Channel
  def subscribed
    stream_from "matching_channel_#{params['matching_unique_key']}"
  end

  def unsubscribed
    Rails.logger.info "called unsubscribed"
  end
end
