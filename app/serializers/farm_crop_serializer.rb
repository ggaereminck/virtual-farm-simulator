class FarmCropSerializer < ActiveModel::Serializer
  attributes :id, :name, :harvest_value, :img, :created_at
end
