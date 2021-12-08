class Store < ApplicationRecord
  has_many :store_animals
  has_many :store_crops
end
