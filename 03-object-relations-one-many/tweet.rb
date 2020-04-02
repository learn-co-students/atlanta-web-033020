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

  def self.all
    @@all
  end

end
