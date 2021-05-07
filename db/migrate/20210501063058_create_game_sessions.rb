class CreateGameSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :game_sessions do |t|
      t.string :unique_key, null: false
      t.bigint :latest_matching_id, null: true

      t.index :unique_key, unique: true
      t.index :latest_matching_id, unique: true
      t.timestamps
    end
  end
end
