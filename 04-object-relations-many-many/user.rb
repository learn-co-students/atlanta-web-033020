class User

  attr_reader :username

  def initialize(username)
    @username = username
  end

  def like_tweet(tweet)
    Like.new(self,tweet)
  end

  def liked_tweets
    # return the array of all the tweets that user has liked
    likes = Like.all.select do |liked_t|
      self == liked_t.user
    end
    likes.map { |like| like.tweet.message }
  end

  def tweets
    tweets = Tweet.all.select do |tweet|
      self == tweet.user
    end
    tweets.map { |tweet| tweet.message }
  end

  def post_tweet(message)
    tweet = Tweet.new(self,message)
    tweet
  end

  # def show_timeline
  #   self.tweets.each do |tweet|
  #     puts "-----------------------------------------------------------------------"
  #     puts " "
  #     puts "#{self.username}: #{tweet.message}"
  #     puts " "
  #     puts "-----------------------------------------------------------------------"
  #   end
  # end

end
