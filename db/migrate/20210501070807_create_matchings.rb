class CreateMatchings < ActiveRecord::Migration[6.1]
  def change
    create_table :matchings do |t|
      t.bigint :game_session_id, null: false, index: true
      t.string :unique_key, null: false

      t.index :unique_key, unique: true
      t.timestamps
    end
  end
end
