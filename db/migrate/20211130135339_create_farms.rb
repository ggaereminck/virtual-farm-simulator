class CreateFarms < ActiveRecord::Migration[6.1]
  def change
    create_table :farms do |t|
      t.integer :currency
      t.string :name
      t.string :img
      t.integer :user_id

      t.timestamps
    end
  end
end
