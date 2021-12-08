class CreateStoreCrops < ActiveRecord::Migration[6.1]
  def change
    create_table :store_crops do |t|
      t.string :name
      t.integer :grow_time
      t.integer :cost
      t.integer :sale_value
      t.string :img
      t.integer :store_id

      t.timestamps
    end
  end
end
