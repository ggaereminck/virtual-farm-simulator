class CreateStoreAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :store_animals do |t|
      t.string :name
      t.string :good_produced
      t.integer :cost
      t.integer :sale_value
      t.string :img
      t.integer :store_id

      t.timestamps
    end
  end
end
