class CreateFarmAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :farm_animals do |t|
      t.string :name
      t.integer :harvest_value
      t.string :img
      t.integer :farm_id
      t.string :good_produced

      t.timestamps
    end
  end
end
