class GameSession < ApplicationRecord

  has_many :matchings, dependent: :destroy

  belongs_to :latest_matching, class_name: Matching.name, optional: true

  before_create { self.unique_key = SecureRandom.uuid }

  def to_param
    unique_key
  end

  def create_matching!
    ApplicationRecord.transaction do
      matching = self.matchings.create!
      self.update!(latest_matching: matching)
      matching
    end
  end
end
