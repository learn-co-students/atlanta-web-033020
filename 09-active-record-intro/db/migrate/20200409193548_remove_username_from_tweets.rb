class RemoveUsernameFromTweets < ActiveRecord::Migration[6.0]
  def change
    remove_column :tweets, :username
  end
end
