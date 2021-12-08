class CreateFarmCrops < ActiveRecord::Migration[6.1]
  def change
    create_table :farm_crops do |t|
      t.string :name
      t.integer :harvest_value
      t.string :img
      t.integer :farm_id

      t.timestamps
    end
  end
end
