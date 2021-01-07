class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.bigint :creator_id
      t.bigint :topic_id
      t.integer :status

      t.timestamps
    end
  end
end
