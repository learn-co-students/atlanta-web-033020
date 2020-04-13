class User < ActiveRecord::Base
  has_many :likes
  has_many :tweets
  # has_many :liked_tweets, through: :likes

  def liked_tweets
    @tweets = self.likes.map { |like| like.tweet }
  end

end
