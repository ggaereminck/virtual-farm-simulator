class StoreDetailsSerializer < StoreSerializer
    has_many :store_crops
    has_many :store_animals
end