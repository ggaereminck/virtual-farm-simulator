class StoreAnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :good_produced, :cost, :sale_value, :img
  has_one :store_id
end
