class Campaign < ApplicationRecord
  belongs_to :client
  has_many :tracks
end
