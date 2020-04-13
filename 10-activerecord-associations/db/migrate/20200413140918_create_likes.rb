class CreateLikes < ActiveRecord::Migration[6.0]
  def change

    create_table :likes do |t|
      # t.integer :user_id, :foreign_key => true
      t.references :user
      t.references :tweet
      # t.integer :tweet_id, :foreign_key => true
    end

  end
end
