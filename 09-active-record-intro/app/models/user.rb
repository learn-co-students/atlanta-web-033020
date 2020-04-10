class User < ActiveRecord::Base
  has_many :tweets
  # def tweets
  #   @tweets = Tweet.all.select { |t| t.user_id == self.id }
  # end

end
