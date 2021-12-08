class FarmAnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :harvest_value, :img, :good_produced, :created_at
  has_one :farm_id
end
