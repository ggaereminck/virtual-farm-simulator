class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :store_animals
  has_many :store_crops
end
