class StoreCropSerializer < ActiveModel::Serializer
  attributes :id, :name, :grow_time, :cost, :sale_value, :img
  has_one :store_id
end
