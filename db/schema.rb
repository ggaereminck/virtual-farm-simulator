# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_30_140723) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "farm_animals", force: :cascade do |t|
    t.string "name"
    t.integer "harvest_value"
    t.string "img"
    t.integer "farm_id"
    t.string "good_produced"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "farm_crops", force: :cascade do |t|
    t.string "name"
    t.integer "harvest_value"
    t.string "img"
    t.integer "farm_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "farms", force: :cascade do |t|
    t.integer "currency"
    t.string "name"
    t.string "img"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "store_animals", force: :cascade do |t|
    t.string "name"
    t.string "good_produced"
    t.integer "cost"
    t.integer "sale_value"
    t.string "img"
    t.integer "store_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "store_crops", force: :cascade do |t|
    t.string "name"
    t.integer "grow_time"
    t.integer "cost"
    t.integer "sale_value"
    t.string "img"
    t.integer "store_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
