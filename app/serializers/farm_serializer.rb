class FarmSerializer < ActiveModel::Serializer
  attributes :id, :currency, :name, :img
  has_one :user_id
  has_many :farm_crops
  has_many :farm_animals
end
