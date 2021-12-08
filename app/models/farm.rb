class Farm < ApplicationRecord
  belongs_to :user
  has_many :farm_crops
  has_many :farm_animals
end
