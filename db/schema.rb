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

ActiveRecord::Schema.define(version: 2021_05_01_070807) do

  create_table "game_sessions", charset: "utf8mb4", force: :cascade do |t|
    t.string "unique_key", null: false
    t.bigint "latest_matching_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["latest_matching_id"], name: "index_game_sessions_on_latest_matching_id", unique: true
    t.index ["unique_key"], name: "index_game_sessions_on_unique_key", unique: true
  end

  create_table "matchings", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "game_session_id", null: false
    t.string "unique_key", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_session_id"], name: "index_matchings_on_game_session_id"
    t.index ["unique_key"], name: "index_matchings_on_unique_key", unique: true
  end

end
