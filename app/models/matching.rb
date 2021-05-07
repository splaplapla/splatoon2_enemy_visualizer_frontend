class Matching < ApplicationRecord

  belongs_to :game_session

  before_create { self.unique_key = SecureRandom.uuid }

  def to_param
    unique_key
  end
end
