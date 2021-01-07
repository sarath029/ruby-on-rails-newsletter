class CreateTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :topics do |t|
      t.string :subject
      t.string :content
      t.bigint :creator_id
      t.integer :status
      t.string :label
      t.string :permalink
      t.integer :topic_type
      t.integer :like_count
      t.integer :view_count
      t.boolean :is_voted

      t.timestamps
    end
  end
end
