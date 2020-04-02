class User

  attr_reader :username, :tweets

  def initialize(username)
    @username = username
    @tweets = []
  end

  def post_tweet(message)
    tweet = Tweet.new(self,message)
    @tweets << tweet
    tweet
  end

end
