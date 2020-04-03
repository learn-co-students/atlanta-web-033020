class Tweet

  attr_accessor :message, :user
  @@all = []

  def initialize(user, message)
    @user = user
    @message = message
    @@all << self
  end

  def username
    self.user.username
  end

  def likers
    # return an array of all the users who liked me / tweet / self
    example = Like.all.select do |like|
      like.tweet == self
    end
    example.map { |like| like.user.username }
  end

  def self.first
    @@all[0]
  end

  def self.all
    @@all
  end

end
